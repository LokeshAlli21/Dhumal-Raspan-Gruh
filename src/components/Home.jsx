import React, { useState } from 'react';
import { Phone, Mail, Instagram, Clock, MapPin, CheckCircle, Globe } from 'lucide-react';

const Home = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      welcome: "Welcome to",
      brandName: "Dhumal Raspan Gruh",
      tagline: "Solapur's Original Sugarcane Juice Destination – Since 1942",
      heroDescription: "With roots deeply grounded in tradition and a legacy of over 80 years, we serve 100% fresh, hygienic, and unadulterated sugarcane juice — just like nature intended.",
      aboutTitle: "About Dhumal Raspan Gruh",
      aboutP1: "Located in the heart of Solapur's iconic Gadda Yatra zone, we serve 100% fresh, hygienic, and unadulterated sugarcane juice — just like nature intended.",
      aboutP2: "Our mission is simple: to quench your thirst with health, heritage, and honesty. Whether you're a local or just visiting, one glass of our juice will make you a lifelong fan.",
      quote: "Because here, every drop tells a story.",
      legacyTitle: "Our Legacy",
      legacySubtitle: "A Legacy of Taste, Since 1942",
      timeline: {
        1942: "Jai Jawan Raspan Gruh was established during the post-independence era by our great-grandfather, offering clean, energizing refreshment to the people of Solapur.",
        1982: "Our visionary grandmother gave the business a fresh identity, renaming it Dhumal Raspan Gruh, adding family warmth that turned customers into community.",
        1994: "Our father Mr. Suhil Balkrishna Dhumal took the reins, bringing better hygiene, customer service, and consistency that made us a landmark in Solapur's Gadda Yatra circle.",
        2025: "I — Amol Sunil Dhumal, the next-gen torchbearer — proudly take this family tradition forward. With modern design and respect for our roots, serving Solapur with the same love and authenticity."
      },
      benefitsTitle: "🍹 Why Sugarcane Juice is Nature's Elixir",
      benefits: [
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
      ],
      benefitsFooter: "Come for the taste. Stay for the benefits.",
      contactTitle: "📍 Contact Us",
      contactLabels: {
        address: "Address",
        phone: "Phone",
        email: "Email",
        instagram: "Instagram",
        timings: "Timings"
      },
      contactDetails: {
        address: "Chatti Galli, Mangalwar Peth, Solapur",
        phone: "+91-9158433382",
        email: "dhumalraspan@gmail.com",
        instagram: "@dhumal_raspan_gruh",
        timings: "10 AM – 10 PM, All Days"
      }
    },
    mr: {
      welcome: "स्वागत आहे",
      brandName: "धुमाळ रसपान गृह",
      tagline: "सोलापूरचे मूळ ऊसरसाचे गंतव्य - १९४२ पासून",
      heroDescription: "८० वर्षांहून अधिक परंपरेत रुजलेल्या मुळांसह, आम्ही १००% ताजे, स्वच्छ आणि अमिश्रित ऊसरस सर्व्ह करतो - जसे निसर्गाने हवे तसे.",
      aboutTitle: "धुमाळ रसपान गृह बद्दल",
      aboutP1: "सोलापूरच्या प्रसिद्ध गड्डा यात्रा झोनच्या मध्यभागी स्थित, आम्ही १००% ताजे, स्वच्छ आणि अमिश्रित ऊसरस सर्व्ह करतो - जसे निसर्गाने हवे तसे.",
      aboutP2: "आमचे ध्येय सोपे आहे: आरोग्य, वारसा आणि प्रामाणिकपणाने तुमची तहान भागवणे. तुम्ही स्थानिक असाल की फक्त भेट देत असाल, आमचा एक ग्लास रस तुम्हाला आजीवन चाहता बनवेल.",
      quote: "कारण येथे, प्रत्येक थेंब एक कथा सांगतो.",
      legacyTitle: "आमचा वारसा",
      legacySubtitle: "चवीचा वारसा, १९४२ पासून",
      timeline: {
        1942: "स्वातंत्र्यानंतरच्या काळात आमच्या पणजोबांनी जय जवान रसपान गृहाची स्थापना केली, सोलापूरच्या लोकांना स्वच्छ, ऊर्जादायी पेय देण्यासाठी.",
        1982: "आमच्या दूरदर्शी आजींनी व्यवसायाला एक नवीन ओळख दिली, त्याचे नाव धुमाळ रसपान गृह ठेवले आणि कौटुंबिक प्रेम जोडले ज्याने ग्राहकांना समुदाय बनवले.",
        1994: "आमचे वडील श्री सुनील बाळकृष्ण धुमाळ यांनी कारभार हाती घेतला, चांगली स्वच्छता, ग्राहकसेवा आणि सातत्य आणले ज्यामुळे आम्ही सोलापूरच्या गड्डा यात्रा वर्तुळात एक ठिकाण बनलो.",
        2025: "मी - अमोल सुनील धुमाळ, पुढच्या पिढीचा वारसदार - या कौटुंबिक परंपरेला गर्वाने पुढे नेत आहे. आधुनिक डिझाइन आणि मुळांचा आदर करून, सोलापूरची सेवा त्याच प्रेमाने आणि सत्यतेने करत आहे."
      },
      benefitsTitle: "🍹 ऊसरस निसर्गाचे अमृत का आहे",
      benefits: [
        {
          title: "तत्काळ ऊर्जा वाढवणारे",
          description: "नैसर्गिक साखर आणि कार्बोहायड्रेट्सने भरपूर, कॅफीन किंवा कृत्रिम पदार्थांशिवाय तत्काळ ऊर्जा देते."
        },
        {
          title: "रोगप्रतिकारक शक्ती वाढवते",
          description: "अँटिऑक्सिडंट्सने भरलेले, संक्रमणाशी लढण्यास मदत करते आणि नैसर्गिक प्रतिकार निर्माण करते."
        },
        {
          title: "त्वचेसाठी उत्तम",
          description: "अल्फा हायड्रॉक्सी अॅसिड (AHA) असतात जे तुमची त्वचा तरुण आणि मुरुमांमुक्त ठेवतात."
        },
        {
          title: "पचनास मदत करते",
          description: "रसातील नैसर्गिक एंजाइम्स पोट शांत करतात आणि पचनास मदत करतात."
        },
        {
          title: "किडनी साफ करणारे",
          description: "नैसर्गिक मूत्रवर्धक म्हणून ओळखले जाते, निरोगी किडनी कार्यास समर्थन देते."
        },
        {
          title: "कोणतेही परिरक्षक नाही",
          description: "आम्ही ते थेट प्रेसमधून सर्व्ह करतो, ताजे आणि रसायनांनी अस्पर्शित."
        }
      ],
      benefitsFooter: "चवीसाठी या. फायद्यांसाठी राहा.",
      contactTitle: "📍 संपर्क करा",
      contactLabels: {
        address: "पत्ता",
        phone: "फोन",
        email: "ईमेल",
        instagram: "इन्स्टाग्राम",
        timings: "वेळ"
      },
      contactDetails: {
        address: "छत्ती गल्ली, मंगलवार पेठ, सोलापूर",
        phone: "+91-9158433382",
        email: "dhumalraspan@gmail.com",
        instagram: "@dhumal_raspan_gruh",
        timings: "सकाळ १० ते रात्री १०, सर्व दिवस"
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
          className="bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border-2 border-orange-200"
        >
          <Globe className="text-orange-600" size={24} />
        </button>
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(251, 146, 60, 0.8), rgba(34, 197, 94, 0.8)), url('https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-green-500/20"></div>
        <div className="relative text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {currentContent.welcome} <span className="text-yellow-300 drop-shadow-lg">{currentContent.brandName}</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-8 text-orange-100">
            {currentContent.tagline}
          </h2>
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/30 shadow-2xl">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              {currentContent.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            {currentContent.aboutTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              {currentContent.aboutP1}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              {currentContent.aboutP2}
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-green-50 p-6 rounded-2xl border-l-4 border-gradient-to-b border-orange-500">
              <p className="text-gray-800 font-medium text-base sm:text-lg italic">
                "{currentContent.quote}"
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-green-400 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1615555130921-d6c0c4c22d79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Fresh sugarcane juice" 
                className="relative w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-100 via-yellow-100 to-green-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
              {currentContent.legacyTitle}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">{currentContent.legacySubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-green-500 rounded-full"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {Object.entries(currentContent.timeline).map(([year, description], index) => (
                <div key={year} className="flex items-center">
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'pr-4 sm:pr-8 text-left sm:text-right' : 'pl-4 sm:pl-8 order-3'}`}>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gradient-to-b border-orange-500">
                      <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">{year}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{description}</p>
                    </div>
                  </div>
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0"></div>
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'pl-4 sm:pl-8 order-3' : 'pr-4 sm:pr-8 text-left sm:text-right'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            {currentContent.benefitsTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentContent.benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-gradient-to-b border-orange-500 hover:transform hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-lg sm:text-xl text-gray-700 font-medium bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            {currentContent.benefitsFooter}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-100 via-yellow-100 to-green-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
              {currentContent.contactTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-orange-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-2">
                {currentContent.brandName}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">{currentContent.contactLabels.address}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{currentContent.contactDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">{currentContent.contactLabels.phone}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{currentContent.contactDetails.phone}</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">{currentContent.contactLabels.email}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{currentContent.contactDetails.email}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <Instagram className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">{currentContent.contactLabels.instagram}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{currentContent.contactDetails.instagram}</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">{currentContent.contactLabels.timings}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{currentContent.contactDetails.timings}</p>
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