import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const ItemDisplay = ({ item }) => {
    
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
        <div className="h-56 bg-gray-200 rounded-xl mb-4"></div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-500 mb-2">${item.price}</p>
        <Button className="w-full">
            <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
        </Button>
        </div>
    );
}
export default ItemDisplay;