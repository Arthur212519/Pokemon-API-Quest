import { getPokemons, getData } from "../services";
import React, { useEffect, useState } from "react"
import { PokeCard } from "../pokeCard";
import styled from "styled-components";

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
        setLimit(limit+10)      
        getPokemons()        
      }   
      
      useEffect(() => {    
        fetchPokemons()              
      }, [limit]) 

    return (
        <section>
            <div>
                {pokemons.map((pokemon,index) => {
                    return (
                        <div key={index}> 
                            <PokeCard pokemon={pokemon}></PokeCard>
                        </div>
                    )
                })}
            </div>

        </section>
    )

}