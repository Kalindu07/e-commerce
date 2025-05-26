import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-black p-4">
            <div className="text-white text-xl font-bold">MADOC</div>
            <ul className="flex gap-4 m-0 p-0 list-none">
                <li>
                    <Link to="/" className="text-white no-underline text-base hover:underline">Home</Link>
                </li>
                <li>
                    <Link to="/mens" className="text-white no-underline text-base hover:underline">Mens</Link>
                </li>
                <li>
                    <Link to="/womens" className="text-white no-underline text-base hover:underline">Womens</Link>
                </li>
                <li>
                    <Link to="/kids" className="text-white no-underline text-base hover:underline">Kids</Link>
                </li>
                <li>
                    <Link to="/about" className="text-white no-underline text-base hover:underline">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white no-underline text-base hover:underline">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
