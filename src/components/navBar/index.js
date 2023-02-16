import styled from "styled-components"
const NavBar = () => {
    return (
        <Div>
            <h1>Pokedéx</h1>
        </Div>
    )
}
const Div = styled.div`
    font-family: 'Pokemon Solid', sans-serif;
    color:#202020;
    background-color:#F33333;
    font-size: 21px;
    max-height: 100px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
      
 `
export { NavBar }