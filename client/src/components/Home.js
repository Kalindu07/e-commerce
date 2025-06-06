import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section 
        className="py-16 px-4 text-center relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Style</h1>
          <p className="text-white mb-6 text-lg">
            Shop the latest trends in fashion for men, women, and kids.
          </p>
          <Button className="text-lg px-6 py-3 bg-white text-black hover:bg-gray-100">
            Shop Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {['Mens', 'Womens', 'Kids'].map((category) => (
          <div
            key={category}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{category}</h2>
            <p className="text-gray-500 mb-4">Explore {category.toLowerCase()} collection</p>
            <Button
              variant="outline"
              onClick={() => navigate(`/${category.toLowerCase()}`)}
            >
              Shop {category}
            </Button>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
              <h3 className="text-lg font-semibold">Product {id}</h3>
              <p className="text-gray-500 mb-2">$49.99</p>
              <Button className="w-full">
                <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
