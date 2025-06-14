import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LogginPage from './components/LogginPage';
import RegisterPage from './components/Registerpage';

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
                        <Route path="/mens" element={<div>Mens Page</div>} />
                        <Route path="/womens" element={<div>Womens Page</div>} />
                        <Route path="/kids" element={<div>Kids Page</div>} />
                        <Route path="/cart" element={<div>Cart Page</div>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;