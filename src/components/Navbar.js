import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-800 p-4">
            <div className="text-white text-xl font-bold">MADOC</div>
            <ul className="flex gap-4 m-0 p-0 list-none">
                <li>
                    <a href="/" className="text-white no-underline text-base hover:underline">Home</a>
                </li>
                <li>
                    <a href="/mens" className="text-white no-underline text-base hover:underline">Mens</a>
                </li>
                <li>
                    <a href="/womens" className="text-white no-underline text-base hover:underline">Womens</a>
                </li>
                <li>
                    <a href="/kids" className="text-white no-underline text-base hover:underline">Kids</a>
                </li>
                <li>
                    <a href="/about" className="text-white no-underline text-base hover:underline">About</a>
                </li>
                <li>
                    <a href="/contact" className="text-white no-underline text-base hover:underline">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
