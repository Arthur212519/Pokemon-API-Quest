import { NavBar } from "../components/navBar"
import styled from "styled-components"
import { PokeList } from "../components/PokeList"
const Home = () => {
    return (
        <Div>
            <NavBar />
            <PokeList />
        </Div>
    )
}
const Div =styled.div`
background-color:#ebedeb`

export { Home }