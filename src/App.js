import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';

const Layout = () => (
  <>
    <header className="sticky inset-x-0 top-0 z-10 shadow-md backdrop-blur-md">
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mens" element={<div>Mens Page</div>} />
            <Route path="womens" element={<div>Womens Page</div>} />
            <Route path="kids" element={<div>Kids Page</div>} />
            <Route path="about" element={<div>About Page</div>} />
            <Route path="contact" element={<div>Contact Page</div>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;