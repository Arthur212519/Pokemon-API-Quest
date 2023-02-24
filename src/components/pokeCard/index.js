import styled from "styled-components";
import "../pokeCard/pokeCard.css"
import { getColor } from "../services";
import React from "react"
import { Link } from "react-router-dom";

const PokeCard = (props) => {
    const { pokemon } = props
   
   const fetchColor=async ()=>{
    const data = await getColor(pokemon.id)
   }
   
   
    return (
        <Link to={`/pokemonStats/${pokemon.id}`} className="link">
            <Div>
                <span>#{pokemon.id}</span>
                <Img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}></Img>
                <h1>{pokemon.name}</h1>

            </Div>
        </Link>
    )
}

const Div = styled.div`
    font-family: 'PixelGameFont', sans-serif;
    padding:10px;
    border: none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size: 15px;
    border-radius: 15px;
    width: 200px;
    height:200px;
    color: white;
`
const Img = styled.img`
max-width:50%;
`

export { PokeCard } 