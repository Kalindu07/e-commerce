import React from 'react';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="font-sans px-4 py-8 text-center">
                <h1 className="text-4xl font-bold mb-6">Your Cart is Empty</h1>
                <p className="text-gray-600 mb-10">Add items to your cart to see them here.</p>
                <Button onClick={() => navigate('/')} className="w-full">
                    Continue Shopping
                </Button>
            </div>
        );
    }

    return (
        <div className="font-sans px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cartItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
                        <div className="h-56 bg-gray-200 rounded-xl mb-4"></div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-500 mb-2">${item.price}</p>
                        <Button onClick={() => removeFromCart(item.id)} className="w-full mb-2">
                            Remove from Cart
                        </Button>
                    </div>
                ))}
            </div>
            <Button onClick={clearCart} className="mt-6 w-full">
                Clear Cart
            </Button>
        </div>
    );
}