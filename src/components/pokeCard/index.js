import styled from "styled-components";
import React from "react"
const PokeCard = (props) => {
   const {pokemon} = props
   console.log(props) 
   
    return (
        <Div>
            
            <h1>{pokemon.name}</h1>

        </Div>
    )
}
const Div = styled.div`
    font-family: 'Common Pixel', sans-serif;
    border: none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size: 11px;
    border-radius: 15px;
    background-color:#202020;
    max-width: 200px;
    min-height:200px;
    color: white;

`

export { PokeCard } 