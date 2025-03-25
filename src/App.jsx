import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Account from './pages/Account';
import Create from './pages/Create';
import NavBar from './components/NavBar';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Account />} />

                <Route
                    path="/explore"
                    element={
                        <NavBar>
                            <Explore />
                        </NavBar>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <NavBar>
                            <Home />
                        </NavBar>
                    }
                />
                <Route
                    path="/create"
                    element={
                        <NavBar>
                            <Create />
                        </NavBar>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
