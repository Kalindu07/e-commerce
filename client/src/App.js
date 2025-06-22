import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LogginPage from './components/LogginPage';
import RegisterPage from './components/Registerpage';
import MensPage from './components/Mens';
import WomensPage from '/components/Womens';
import KidsPage from '/components/Kids';
import Cart from '/components/Cart';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LogginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/mens" element={<MensPage />} />
                        <Route path="/womens" element={<WomensPage />} />
                        <Route path="/kids" element={<KidsPage />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;