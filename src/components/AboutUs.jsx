import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-orange-500">Us</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Housify was founded amidst in the world of real estate 
                to help people in finding their dream homes and making 
                smart property investments. We believe that everyone 
                deserves a place they can truly call home.
              </p>
              <p>
                Our agents are specialists in finding the perfect homes 
                and commercial properties for our clients, and we believe that every 
                property transaction should be a positive experience.
              </p>
              <p>
                Through years of experience and commitment to excellence, 
                we have built a reputation for delivering exceptional results 
                and exceeding our clients' expectations. Our team of dedicated 
                professionals works tirelessly to ensure that every client 
                receives personalized attention and expert guidance throughout 
                their real estate journey.
              </p>
              <p>
                We understand that buying or selling a property is one of life's 
                biggest decisions, and we're here to make the process as smooth 
                and stress-free as possible.
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy couple with real estate agent"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
              <div className="text-sm font-medium">Years of Experience</div>
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-xl">
              <div className="text-lg font-bold mb-1">Award Winner</div>
              <div className="text-xs">Best Real Estate Agency 2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

