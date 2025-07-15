import React from 'react';
import { Phone, Mail, Instagram, Clock, MapPin, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-green-400">Dhumal Raspan Gruh</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-gray-200">
            Solapur's Original Sugarcane Juice Destination – Since 1942
          </h2>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-30">
            <p className="text-lg md:text-xl leading-relaxed">
              With roots deeply grounded in tradition and a legacy of over 80 years, we serve 
              <span className="font-semibold text-green-300"> 100% fresh, hygienic, and unadulterated sugarcane juice</span> 
              — just like nature intended.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Dhumal Raspan Gruh</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Located in the heart of Solapur's iconic Gadda Yatra zone, we serve 100% fresh, 
              hygienic, and unadulterated sugarcane juice — just like nature intended.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is simple: to quench your thirst with health, heritage, and honesty. 
              Whether you're a local or just visiting, one glass of our juice will make you a lifelong fan.
            </p>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-800 font-medium">
                "Because here, every drop tells a story."
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1615555130921-d6c0c4c22d79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Fresh sugarcane juice" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Legacy</h2>
            <p className="text-xl text-gray-600">A Legacy of Taste, Since 1942</p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"></div>
            
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-green-600 mb-2">1942</h3>
                    <p className="text-gray-700">
                      Jai Jawan Raspan Gruh was established during the post-independence era by our great-grandfather, 
                      offering clean, energizing refreshment to the people of Solapur.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-green-600 mb-2">1982</h3>
                    <p className="text-gray-700">
                      Our visionary grandmother gave the business a fresh identity, renaming it Dhumal Raspan Gruh, 
                      adding family warmth that turned customers into community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-green-600 mb-2">1994</h3>
                    <p className="text-gray-700">
                      Our father Mr. Suhil Balkrishna Dhumal took the reins, bringing better hygiene, 
                      customer service, and consistency that made us a landmark in Solapur's Gadda Yatra circle.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-green-600 mb-2">2025</h3>
                    <p className="text-gray-700">
                      I — Amol Sunil Dhumal, the next-gen torchbearer — proudly take this family tradition forward. 
                      With modern design and respect for our roots, serving Solapur with the same love and authenticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🍹 Why Sugarcane Juice is Nature's Elixir
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Instant Energy Booster",
              description: "Rich in natural sugars and carbs, provides quick energy without caffeine or artificial additives."
            },
            {
              title: "Strengthens Immunity",
              description: "Loaded with antioxidants, helps fight infections and builds natural resistance."
            },
            {
              title: "Great for Skin",
              description: "Contains alpha hydroxy acids (AHAs) that keep your skin youthful and acne-free."
            },
            {
              title: "Aids Digestion",
              description: "Natural enzymes in the juice soothe the stomach and aid in digestion."
            },
            {
              title: "Kidney Cleanser",
              description: "Known to be a natural diuretic, supports healthy kidney function."
            },
            {
              title: "No Preservatives",
              description: "We serve it straight from the press, fresh and untouched by chemicals."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 font-medium">
            Come for the taste. Stay for the benefits.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">📍 Contact Us</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-600 mb-2">Dhumal Raspan Gruh</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-green-500 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">Chatti Galli, Mangalwar Peth, Solapur</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-green-500 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91-9158433382</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="text-green-500 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">dhumalraspan@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Instagram className="text-green-500 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Instagram</p>
                    <p className="text-gray-600">@dhumal_raspan_gruh</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="text-green-500 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Timings</p>
                    <p className="text-gray-600">10 AM – 10 PM, All Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;