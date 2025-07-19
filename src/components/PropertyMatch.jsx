import React from 'react';
import { Bed, Bath, Square, Heart, Share2 } from 'lucide-react';

const PropertyMatch = () => {
  const featuredProperty = {
    id: 1,
    price: "$930,000",
    address: "789 Lakeview Street",
    city: "San Francisco",
    state: "CA",
    sqft: "2,225",
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  const smallProperties = [
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Discover Your Perfect
              <br />
              <span className="text-orange-500">Property Match</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover Your Perfect Property Match with our expert team dedicated 
              to finding the ideal home or investment in California. Our experienced 
              real estate agents have in-depth knowledge with personalized 
              guidance to help you navigate the competitive market and secure 
              the perfect property that fits your lifestyle and budget.
            </p>
          </div>

          {/* Right Content - Properties */}
          <div className="space-y-6">
            {/* Featured Property Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={featuredProperty.image} 
                  alt="Featured Property"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {featuredProperty.price}
                    </div>
                    <div className="text-gray-600">
                      {featuredProperty.address}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {featuredProperty.city}, {featuredProperty.state}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Square className="h-4 w-4" />
                    <span className="text-sm">{featuredProperty.sqft} Sq. Ft</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Bed className="h-4 w-4" />
                    <span className="text-sm">{featuredProperty.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Bath className="h-4 w-4" />
                    <span className="text-sm">{featuredProperty.baths} Baths</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Property Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {smallProperties.map((property) => (
                <div 
                  key={property.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                >
                  <img 
                    src={property.image} 
                    alt={`Property ${property.id}`}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyMatch;

