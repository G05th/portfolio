import React, { useState } from 'react';
import { Search, Bed, Bath, Square, MapPin } from 'lucide-react';

const PropertyShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('Buy');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['Buy', 'Rent', 'Sold'];

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Atlanta, GA",
      sqft: "2,225",
      beds: 3,
      baths: 2,
      type: "Buy"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "San Francisco, CA",
      sqft: "1,850",
      beds: 2,
      baths: 2,
      type: "Rent"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Boston, MA",
      sqft: "3,100",
      beds: 4,
      baths: 3,
      type: "Buy"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Miami, FL",
      sqft: "1,650",
      beds: 2,
      baths: 1,
      type: "Sold"
    }
  ];

  const filteredProperties = properties.filter(property => 
    activeFilter === 'Buy' ? property.type === 'Buy' || property.type === 'Rent' : property.type === activeFilter
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Property Showcase
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-md">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Type your city or zip code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <div 
              key={property.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={`Property in ${property.location}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    property.type === 'Buy' ? 'bg-green-100 text-green-800' :
                    property.type === 'Rent' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {property.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600 font-medium">{property.location}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{property.sqft} Sq. Ft</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;

