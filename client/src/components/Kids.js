import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const Kids = () => {
  return (
    <div className="font-sans px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Kids' Collection</h1>
        <p className="text-center text-gray-600 mb-10">
            Explore our exclusive range of kids’ clothing – perfect for every occasion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
                key={id}
                className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
            >
                <div className="h-56 bg-gray-200 rounded-xl mb-4"></div>
                <h3 className="text-lg font-semibold">Kids' Item {id}</h3>
                <p className="text-gray-500 mb-2">$29.99</p>
                <Button className="w-full">
                <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
                </Button>
            </div>
            ))}
        </div>
    </div>
  );
}
export default Kids;