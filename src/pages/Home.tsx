import { useState } from "react";
import HeroImage from '../assets/images/A_Hero.jpg'
import HeroHeader from "../components/HeroHeader";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroHeader
        title="Welcome to My Creative World"
        imageUrl={HeroImage}
      >
        <p className="text-xl mb-8 max-w-2xl text-center">
          Exploring the intersection of art and animation through creative expression
        </p>
      </HeroHeader>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add 3 featured works here */}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm a passionate artist and animator dedicated to creating compelling visual stories. 
              My work spans across various mediums, from traditional art to digital animation, 
              each piece telling its own unique story.
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link 
            to="/gallery" 
            className="bg-gray-100 p-8 rounded-lg hover:bg-gray-200 transition-colors text-center"
          >
            <h3 className="text-2xl font-bold mb-4">View Gallery</h3>
            <p className="text-gray-600">
              Explore my complete collection of artwork and animations
            </p>
          </Link>
          
          <Link 
            to="/contact" 
            className="bg-gray-100 p-8 rounded-lg hover:bg-gray-200 transition-colors text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600">
              Interested in collaboration or have questions? Let's connect
            </p>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;