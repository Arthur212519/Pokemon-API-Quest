import Logo from "./images/pokemon-logo.png"
import styled from "styled-components"
const NavBar = () => {
    return (
        <Div>
            <Img src={Logo}/>
        </Div>
    )
}
const Div = styled.div`
    font-family: 'Pokemon Solid', sans-serif;
    color:#202020;
    background-color:#F33333;
    font-size: 21px;
    height: 150px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
 `
const Img = styled.img`
    max-width:200px;
`
export { NavBar }