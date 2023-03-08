import React,{ useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../Context"
const ButtonDefault =(props)=>{
    const {theme} = useContext(ThemeContext)
    return(
        <Button  {...props}
        style={{color:theme.color,backgroundColor:theme.buttoncolor}}>
        </Button>
    )
}
const Button = styled.button`
font-family: 'PixelGameFont', sans-serif;
padding:10px 20px;
font-size:20px;
color:#ebedeb;
cursor:pointer;
border-radius:20px;
border:none;
box-shadow:  0 5px 10px rgba(15,15,15,0.25);
background-color:rgb(109, 9,155);
`
export { ButtonDefault }