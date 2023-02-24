
import './App.css';
import { createGlobalStyle } from 'styled-components'
import { AppRouter } from './Pages/routes';

function App() {
  return (
    <>
    <GlobalStyle/>
  <AppRouter />
  </>
  )
}
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;   
    box-size:border-box;   
  }
`
export default App;
