import { useState } from "react";
import { createContext } from "react";

export const themes ={
    light:{
        color:'#ffffff',
        buttoncolor:"#A537F9",
        background:'rgb(109, 9,155)',
        card:"rgb(15, 15, 15)",
        movesColor:"#A537F9",
        abilityColor:"#A537F9"
    },
    dark:{
        movesColor:"#bf930d",
        buttoncolor:"#bf930d",
        color:"#ffffff",
        abilityColor:"#bf930d",
        background:'#3A3A3A',
        card:"#bf930d"
    }
}
export const ThemeContext =createContext({})

export const ThemeProvider = (props)=>{
const [theme,setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}