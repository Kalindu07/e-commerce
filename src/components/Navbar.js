import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, LogIn, UserPlus } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
    // This should be replaced with your actual auth state management
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className="flex justify-between items-center bg-gray-950 p-4">
            <div className="text-white text-2xl font-extrabold font-mono">MADOC</div>
            <ul className="flex-1 flex justify-center gap-6 m-0 p-0 list-none items-center">
                <li>
                    <Link to="/" className="text-white no-underline text-lg font-mono hover:underline">Home</Link>
                </li>
                <li>
                    <Link to="/mens" className="text-white no-underline text-lg font-mono hover:underline">Mens</Link>
                </li>
                <li>
                    <Link to="/womens" className="text-white no-underline text-lg font-mono hover:underline">Womens</Link>
                </li>
                <li>
                    <Link to="/kids" className="text-white no-underline text-lg font-mono hover:underline">Kids</Link>
                </li>
                <li>
                    <Link to="/cart" className="text-white no-underline text-lg font-mono hover:underline">Cart</Link>
                </li>
            </ul>
            <div className="flex items-center gap-4">
                {isLoggedIn ? (
                    // Show profile icon when logged in
                    <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                        <User className="h-5 w-5" />
                    </Button>
                ) : (
                    // Show login/register buttons when not logged in
                    <div className="flex gap-2">
                        <Button 
                            variant="outline" 
                            className="text-white border-white hover:bg-gray-800"
                            onClick={() => setIsLoggedIn(true)} // This should be replaced with actual login logic
                        >
                            <LogIn className="h-4 w-4 mr-2" />
                            Login
                        </Button>
                        <Button 
                            variant="outline" 
                            className="text-white border-white hover:bg-gray-800"
                            onClick={() => setIsLoggedIn(true)} // This should be replaced with actual register logic
                        >
                            <UserPlus className="h-4 w-4 mr-2" />
                            Register
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
