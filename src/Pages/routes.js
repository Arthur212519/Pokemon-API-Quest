import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>

    )
}
export { AppRouter }