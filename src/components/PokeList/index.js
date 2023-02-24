import { getPokemons, getData, } from "../services";
import React, { useEffect, useState } from "react"
import { PokeCard } from "../pokeCard";
import styled from "styled-components";
import { ButtonDefault } from "../Button";

const PokeList = () => {
    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState(10)

    const fetchPokemons = async () => {
        const data = await getPokemons(limit)
        const promise = data.results.map(async (pokemon) => {
            return await getData(pokemon.url)
        })
        const results = await Promise.all(promise)
        setPokemons(results)
    }
    const onClickHandler = () => {
        setLimit(limit + 10)
        getPokemons()
    }
    useEffect(() => {
        fetchPokemons()
    }, [limit])

    return (
        <Section>
            <Div>
                {pokemons.map((pokemon, index) => {
                    return (
                        <div key={index}>
                            <PokeCard pokemon={pokemon}></PokeCard>
                        </div>
                    )
                })}
            </Div>
            <div>
                <ButtonDefault onClick={onClickHandler}>Load more</ButtonDefault>
            </div>

        </Section>
    )

}
const Section = styled.section`
display:flex;
flex-direction:column;
align-items:center;
`
const Div = styled.div`
display:flex;
margin:20px;
justify-content:center;
align-items:center;
gap:10px;
flex-wrap:wrap;
`
export { PokeList }