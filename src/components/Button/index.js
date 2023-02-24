import styled from "styled-components"
const ButtonDefault =(props)=>{
    return(
        <Button  {...props}></Button>
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
background-color:#F33333;
`
export { ButtonDefault }