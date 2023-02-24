import { useEffect, useState } from "react";
import { getPokemon, getData,getType } from "../services";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { NavBar } from "../navBar";

import { ButtonDefault } from "../Button";
import { PokemonInfo } from "../PokemonInfo";

const PokemonStats = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    const [ability, setAbility] = useState()
    

    const fetchPokemon = async () => {
        const pokemon = await getPokemon(id)
        setPokemon(pokemon)
        const abilities = pokemon.abilities.map((ability) => {
            return getData(ability.ability.url)
        })
        const results = Promise.all(abilities)
        setAbility([results])
    }
        useEffect(() => {
            fetchPokemon()
        }, [])
        return (
            <section>
                <NavBar />
                <Link to={'/'}><ButtonDefault >Home</ButtonDefault></Link>
                <PokemonInfo pokemon={pokemon} />

            </section>
        )
}   
export { PokemonStats }