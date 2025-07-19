import React from 'react';
import { Home, Users, Heart } from 'lucide-react';

const WhoWeAre = () => {
  const stats = [
    {
      icon: <Home className="h-8 w-8 text-orange-500" />,
      number: "80+",
      label: "Premium Houses",
      description: "Luxury properties"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      number: "500+",
      label: "Agent Houses",
      description: "Professional agents"
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      number: "2K+",
      label: "Happy Clients",
      description: "Satisfied customers"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We offer a range of services including buying, selling, 
              and property management. Our experienced team is dedicated 
              to helping you find the perfect home that matches your 
              lifestyle and budget.
            </p>
            <p className="text-gray-600 mb-8">
              With years of experience in the real estate market, we understand 
              the importance of finding not just a house, but a home where 
              memories are made and dreams come true.
            </p>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

