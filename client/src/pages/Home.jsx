// src/App.jsx
import React from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <Nav />
      </nav>

      {/* Hero Banner */}
      <section className="h-[400px] bg-[url('/src/assets/hero-banner.jpg')] bg-cover bg-center flex items-center justify-center text-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold">Welcome to YourStore</h1>
          <p className="mt-4 text-lg">
            Shop the latest trends in fashion for men, women, and kids.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Shop by Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="category-item text-center">
              <img
                src="/src/assets/men.jpg"
                alt="Men"
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">Men</h3>
            </div>
            <div className="category-item text-center">
              <img
                src="/src/assets/women.jpg"
                alt="Women"
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">Women</h3>
            </div>
            <div className="category-item text-center">
              <img
                src="/src/assets/kids.jpg"
                alt="Kids"
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">Kids</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 YourStore - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
