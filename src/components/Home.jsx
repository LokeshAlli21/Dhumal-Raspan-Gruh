import React, { useState, useEffect, useContext } from 'react';
import { Phone, Mail, Instagram, Clock, MapPin, CheckCircle, Globe, Zap, Shield, Sparkles, Heart, Droplets, Leaf , MessageSquare} from 'lucide-react';
import {LanguageContext} from '../context/LanguageContext.js'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'

const Home = () => {
  const {language} = useContext(LanguageContext)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      welcome: "Welcome to",
      brandName: "Dhumal Raspan Gruh",
      tagline: "Solapur's Original Sugarcane Juice Destination – Since 1942",
      heroDescription: "80+ years of trust, taste, and tradition — now reborn as a modern legacy brand.",
      aboutTitle: "About Dhumal Raspan Gruh",
      aboutP1: "With roots deeply grounded in tradition and a legacy of over 80 years, Dhumal Raspan Gruh has been a name synonymous with purity, freshness, and the unforgettable taste of naturally sweet sugarcane juice. Located in the heart of Solapur's iconic Gadda Yatra zone, we serve 100% fresh, hygienic, and unadulterated sugarcane juice — just like nature intended.",
      aboutP2: "Our mission is simple: to quench your thirst with health, heritage, and honesty. Whether you're a local or just visiting, one glass of our juice will make you a lifelong fan.",
      quote: "Because at Dhumal Raspan Gruh, every drop embodies the taste of tradition, the strength of service, and the pride of a family legacy.",
      legacyTitle: "Our Legacy",
      legacySubtitle: "A Legacy That Began in 1942 — Reborn as a Brand in 2025",
      legacyIntro: "The story of Dhumal Raspan Gruh is more than just about serving sugarcane juice — it's a tale of service, sacrifice, and a family tradition carried forward across four proud generations.",
      timeline: {
        1942: "Our great-grandmother established a humble juice stall called Jai Hind Raspan Gruh to provide fresh, natural sugarcane juice to the people of Solapur. It quickly became an integral part of the city's culture, especially during the iconic Gadda Yatra.",
        1982: <>The torch was passed to our grandfather, who returned home after honourably serving in the Indian Army as a Naib Subedar. With pride and purpose, he continued the legacy and renamed it <strong>"Jai Jawan Raspan Gruh"</strong>, giving it a renewed identity grounded in discipline, trust, and family values.</>,
        1992: "The third generation, Mr. Sunil Balkrishna Dhumal, took the legacy forward. With a vision to give the family name the recognition it deserved, he rebranded the business as Dhumal Raspan Gruh. Under his leadership, the juice centre gained a reputation for quality, hygiene, and heartfelt service.",
        2025: "I — Amol Sunil Dhumal — step forward as the fourth generation to carry this treasured legacy. On 14th July 2025, we marked a new milestone by officially rebranding Dhumal Raspan Gruh as a contemporary heritage brand, while remaining committed to the values that have shaped us since 1942."
      },
      legacyFooter: "We are proud to be Solapur's only fourth-generation family-run sugarcane juice centre, and even prouder to serve a drink that's not only refreshing, but historic.",
      benefitsTitle: "Why Sugarcane Juice is Nature's Elixir",
      benefits: [
        {
          title: "Instant Energy Booster",
          description: "Rich in natural sugars and carbs, sugarcane juice provides quick energy without caffeine or artificial additives.",
          icon: Zap
        },
        {
          title: "Strengthens Immunity",
          description: "Loaded with antioxidants, it helps fight infections and builds natural resistance.",
          icon: Shield
        },
        {
          title: "Great for Skin",
          description: "Contains alpha hydroxy acids (AHAs) that keep your skin youthful and acne-free.",
          icon: Sparkles
        },
        {
          title: "Aids Digestion",
          description: "Natural enzymes in the juice soothe the stomach and aid in digestion.",
          icon: Heart
        },
        {
          title: "Kidney Cleanser",
          description: "Known to be a natural diuretic, sugarcane juice supports healthy kidney function.",
          icon: Droplets
        },
        {
          title: "No Preservatives, No Chemicals",
          description: "At Dhumal Raspan Gruh, we serve it straight from the press, fresh and untouched.",
          icon: Leaf
        }
      ],
      benefitsFooter: "Come for the taste. Stay for the benefits.",
      contactLabels: {
        address: "Address",
        phone: "Phone",
        email: "Email",
        instagram: "Instagram",
        timings: "Timings"
      },
      contactDetails: {
        address: "Chatti Galli, Mangalwar Peth, Solapur",
        phone: "+91-9158433380",
        email: "dhumalraspan@gmail.com",
        instagram: "@dhumal_raspan_gruh",
        timings: "10 AM – 10 PM, All Days"
      }
    },
    mr: {
      welcome: "स्वागत आहे",
      brandName: "धुमाळ रसपान गृह",
      tagline: "सोलापूरचे मूळ ऊसरसाचे गंतव्य - १९४२ पासून",
      heroDescription: "८०+ वर्षांचा विश्वास, चव आणि परंपरा — आता आधुनिक वारसा ब्रँड म्हणून पुनर्जन्म.",
      aboutTitle: "धुमाळ रसपान गृह बद्दल",
      aboutP1: "८० वर्षांहून अधिक परंपरेत रुजलेल्या मुळांसह, धुमाळ रसपान गृह हे शुद्धता, ताजेपणा आणि नैसर्गिक गोड ऊसरसाच्या अविस्मरणीय चवीचे नाव आहे. सोलापूरच्या प्रसिद्ध गड्डा यात्रा झोनच्या मध्यभागी स्थित, आम्ही १००% ताजे, स्वच्छ आणि अमिश्रित ऊसरस सर्व्ह करतो — जसे निसर्गाने हवे तसे.",
      aboutP2: "आमचे ध्येय सोपे आहे: आरोग्य, वारसा आणि प्रामाणिकपणाने तुमची तहान भागवणे. तुम्ही स्थानिक असाल की फक्त भेट देत असाल, आमचा एक ग्लास रस तुम्हाला आजीवन चाहता बनवेल.",
      quote: "कारण धुमाळ रसपान गृहात, प्रत्येक थेंब परंपरेची चव, सेवेची शक्ती आणि कौटुंबिक वारशाचा अभिमान दर्शवतो.",
      legacyTitle: "आमचा वारसा",
      legacySubtitle: "१९४२ मध्ये सुरू झालेला वारसा — २०२५ मध्ये ब्रँड म्हणून पुनर्जन्म",
      legacyIntro: "धुमाळ रसपान गृहाची कथा केवळ ऊसरस सर्व्ह करण्याबद्दल नाही — ही सेवा, त्याग आणि चार अभिमानास्पद पिढ्यांमध्ये वाहून नेलेल्या कौटुंबिक परंपरेची गाथा आहे.",
      timeline: {
        1942: "आमच्या पणजींनी सोलापूरच्या लोकांना ताजे, नैसर्गिक ऊसरस देण्यासाठी जय हिंद रसपान गृह नावाचे नम्र रसाचे स्टॉल स्थापन केले. विशेषतः प्रसिद्ध गड्डा यात्रेदरम्यान हे शहराच्या संस्कृतीचा अविभाज्य भाग बनले.",
        1982: <>भारतीय सैन्यात नायब सुभेदार म्हणून सन्मानाने सेवा केल्यानंतर घरी परतलेल्या आमच्या आजोबांना ही मशाल देण्यात आली. अभिमानाने आणि हेतूने, त्यांनी हा वारसा पुढे चालू ठेवला आणि त्याचे नाव <strong> " जय जवान रसपन गृह "</strong> ठेवले, ज्यामुळे शिस्त, विश्वास आणि कौटुंबिक मूल्यांवर आधारित एक नवीन ओळख निर्माण झाली.</>,
        1992: "तिसऱ्या पिढीतील श्री. सुनील बाळकृष्ण धुमाळ यांनी हा वारसा पुढे नेला. कुटुंबाच्या नावाला योग्य ती ओळख मिळवून देण्याच्या दृष्टिकोनातून त्यांनी व्यवसायाचे नाव धुमाळ रसपान गृह असे ठेवले. त्यांच्या नेतृत्वाखाली, ज्यूस सेंटरने गुणवत्ता, स्वच्छता आणि प्रामाणिक सेवेसाठी प्रतिष्ठा मिळवली.",
        2025: "मी — अमोल सुनील धुमाळ — या बहुमोल वारशाला पुढे नेण्यासाठी चौथी पिढी म्हणून पुढे येत आहे. १४ जुलै २०२५ रोजी, आम्ही धुमाळ रसपान गृहाला समकालीन वारसा ब्रँड म्हणून अधिकृतपणे रिब्रँड करून नवीन मैलाचा दगड गाठला, १९४२ पासून आम्हाला आकार देणाऱ्या मूल्यांप्रती वचनबद्ध राहिलो."
      },
      legacyFooter: "आम्हाला सोलापूरचे एकमेव चौथ्या पिढीतील कौटुंबिक ऊसरस केंद्र असण्याचा अभिमान आहे आणि केवळ ताजेतवाने नाही तर ऐतिहासिक पेय सर्व्ह करण्याचा त्याहूनही जास्त अभिमान आहे.",
      benefitsTitle: "ऊसरस निसर्गाचे अमृत का आहे",
      benefits: [
        {
          title: "तत्काळ ऊर्जा वाढवणारे",
          description: "नैसर्गिक साखर आणि कार्बोहायड्रेट्सने भरपूर, ऊसरस कॅफीन किंवा कृत्रिम पदार्थांशिवाय तत्काळ ऊर्जा देते.",
          icon: Zap
        },
        {
          title: "रोगप्रतिकारक शक्ती वाढवते",
          description: "अँटिऑक्सिडंट्सने भरलेले, ते संक्रमणाशी लढण्यास मदत करते आणि नैसर्गिक प्रतिकार निर्माण करते.",
          icon: Shield
        },
        {
          title: "त्वचेसाठी उत्तम",
          description: "अल्फा हायड्रॉक्सी अॅसिड (AHA) असतात जे तुमची त्वचा तरुण आणि मुरुमांमुक्त ठेवतात.",
          icon: Sparkles
        },
        {
          title: "पचनास मदत करते",
          description: "रसातील नैसर्गिक एंजाइम्स पोट शांत करतात आणि पचनास मदत करतात.",
          icon: Heart
        },
        {
          title: "किडनी साफ करणारे",
          description: "नैसर्गिक मूत्रवर्धक म्हणून ओळखले जाते, ऊसरस निरोगी किडनी कार्यास समर्थन देते.",
          icon: Droplets
        },
        {
          title: "कोणतेही परिरक्षक, कोणतेही रसायन नाही",
          description: "धुमाळ रसपान गृहात, आम्ही ते थेट प्रेसमधून सर्व्ह करतो, ताजे आणि अस्पर्शित.",
          icon: Leaf
        }
      ],
      benefitsFooter: "चवीसाठी या. फायद्यांसाठी राहा.",
      contactLabels: {
        address: "पत्ता",
        phone: "फोन",
        email: "ईमेल",
        instagram: "इन्स्टाग्राम",
        timings: "वेळ"
      },
      contactDetails: {
        address: "छत्ती गल्ली, मंगलवार पेठ, सोलापूर",
        phone: "+91-9158433380",
        email: "dhumalraspan@gmail.com",
        instagram: "@dhumal_raspan_gruh",
        timings: "सकाळ १० ते रात्री १०, सर्व दिवस"
      }
    }
  };

  const currentContent = content[language];

  return (
<div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-x-hidden">

      {/* Hero Section */}
    <section id='hero'
        className="relative min-h-[110vh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
            backgroundImage: `linear-gradient(rgba(5, 93, 57, 0.7), rgba(16, 185, 129, 0.4)), url('https://cdn.pixabay.com/photo/2020/07/09/20/05/sugarcane-5388628_1280.jpg')`
        }}
        >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-green-400/15 to-teal-400/10">
            <div className="absolute inset-0 bg-green-600/5" 
                style={{
                backgroundImage: `
                    linear-gradient(rgba(52, 211, 153, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(52, 211, 153, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
                }}></div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-emerald-300/30 to-green-300/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-32 sm:top-40 right-16 sm:right-32 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-green-300/25 to-teal-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 sm:bottom-32 left-16 sm:left-32 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-br from-teal-300/25 to-emerald-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Particle Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 bg-emerald-200 rounded-full animate-pulse opacity-40"
                style={{
                top: `${10 + (i * 5)}%`,
                left: `${5 + (i * 6)}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i * 0.2)}s`
                }}
            />
            ))}
        </div>

        {/* Enhanced Hero Content */}
        <div 
            className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto mt-16"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
            <div className="mb-6 sm:mb-8">
            {/* Welcome Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-100 font-medium">
                {currentContent.welcome}
                </p>
            </div>

            {/* Enhanced Brand Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-emerald-200 via-green-100 to-teal-200 bg-clip-text text-transparent leading-tight mb-4 sm:mb-6">
                {currentContent.brandName}
            </h1>

            {/* Enhanced Divider */}
            <div className="flex justify-center mb-4 sm:mb-6">
                <div className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-24 sm:w-32 md:w-48 rounded-full animate-pulse"></div>
            </div>
            </div>
            
            {/* Enhanced Tagline */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-emerald-50 mb-8 sm:mb-12 font-light max-w-5xl mx-auto leading-relaxed">
            {currentContent.tagline}
            </h2>
            
            {/* Enhanced Quote Card */}
            <div className="group relative max-w-4xl mx-auto">
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition-all duration-700"></div>
            
            {/* Enhanced Main Card */}
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-12 border border-white/30 shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                {/* Decorative Quote Mark */}
                <div className="text-5xl sm:text-6xl text-emerald-400 font-bold mb-4 opacity-20 leading-none">"</div>
                
                {/* Enhanced Description */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium mb-6 relative">
                {currentContent.heroDescription}
                </p>

                {/* Call-to-Action Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-400 text-emerald-700 font-semibold rounded-2xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Learn More
                </button>
                </div> */}
            </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
            </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>

      {/* About Section */}
      <section id='about' className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6" style={{ color: '#055d39' }}>
              {currentContent.aboutTitle}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto rounded-full" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.aboutP1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.aboutP2}
              </p>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-8 rounded-2xl border-l-4 border-green-600" style={{ borderColor: '#055d39' }}>
                  <p className="text-gray-800 font-medium text-lg italic">
                    "{currentContent.quote}"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500" style={{ background: `linear-gradient(135deg, #055d39, #047857, #0f766e)` }}></div>
                <img 
                  src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-64159980/64159980.jpg" 
                  alt="Fresh sugarcane juice" 
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id='legacy' className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20 sm:opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23055d39' fill-opacity='0.1'><circle cx='30' cy='30' r='1'/></g></g></svg>")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
              {currentContent.legacyTitle}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 px-4 sm:px-8 lg:px-0">
              {currentContent.legacySubtitle}
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto mb-6 sm:mb-8 rounded-full" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}></div>
            <p className="text-base sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-0">
              {currentContent.legacyIntro}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500 rounded-full opacity-60" style={{ background: `linear-gradient(to bottom, #055d39, #047857, #0f766e)` }}></div>
            
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500 rounded-full opacity-60" style={{ background: `linear-gradient(to bottom, #055d39, #047857, #0f766e)` }}></div>
            
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {Object.entries(currentContent.timeline).map(([year, description], index) => (
                <div key={year} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 order-3'}`}>
                      <div className="group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative bg-white/10 backdrop-blur-lg p-6 lg:p-8 rounded-2xl border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl">
                          <h3 className="text-xl lg:text-2xl font-bold text-green-400 mb-3 lg:mb-4" style={{ color: '#34d399' }}>{year}</h3>
                          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full border-4 border-slate-800 shadow-2xl z-10 flex-shrink-0 flex items-center justify-center" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}>
                      <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pl-8 order-3' : 'pr-8 text-right'}`}></div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start">
                    <div className="relative w-8 h-8 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full border-4 border-slate-800 shadow-2xl z-10 flex-shrink-0 flex items-center justify-center mt-2" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="ml-6 flex-1">
                      <div className="group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl">
                          <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2 sm:mb-3" style={{ color: '#34d399' }}>{year}</h3>
                          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Quote */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="relative inline-block max-w-4xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/20 mx-4 sm:mx-6 lg:mx-0">
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 italic font-medium leading-relaxed">
                  {currentContent.legacyFooter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id='benefits' className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6" style={{ color: '#055d39' }}>
              {currentContent.benefitsTitle}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto rounded-full" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-white/50 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-8 rounded-2xl border border-green-200">
                <p className="text-xl font-bold text-green-800" style={{ color: '#055d39' }}>
                  {currentContent.benefitsFooter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
      {/* Footer */}
      <footer id='contact' className="bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
              {currentContent.brandName}
            </h3>
            <p className="text-gray-400 mb-6">{currentContent.tagline}</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="tel:+91-9158433380" className="p-3 rounded-full hover:scale-110 transition-transform cursor-pointer" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}>
                <Phone className="text-white" size={20} />
              </a>
              <a href="mailto:dhumalraspan@gmail.com" className="p-3 rounded-full hover:scale-110 transition-transform cursor-pointer" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}>
                <Mail className="text-white" size={20} />
              </a>
              <a href="https://wa.me/919158433380" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:scale-110 transition-transform cursor-pointer" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/>
                </svg>
              </a>
              <a href="https://instagram.com/dhumal_raspan_gruh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:scale-110 transition-transform cursor-pointer" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}>
                <Instagram className="text-white" size={20} />
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400 mb-8">
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">📍 Visit Us</h4>
                <p>Dhumal Raspan Gruh</p>
                <p>Chatti Galli, Mangalwar Peth, Solapur</p>
                <p className="mt-2">📞 +91-9158433380</p>
                <p>📧 dhumalraspan@gmail.com</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">🕐 Timings</h4>
                <p>10 AM – 10 PM</p>
                <p>All Days</p>
                <p className="mt-2">📲 @dhumal_raspan_gruh</p>
              </div>
            </div>
            
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto mb-8 rounded-full" style={{ background: `linear-gradient(to right, #055d39, #047857, #0f766e)` }}></div>
            
            <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">Heritage</h4>
                <p>Serving since 1942</p>
                <p>4th Generation Legacy</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Quality</h4>
                <p>100% Fresh Juice</p>
                <p>No Preservatives</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Follow Us</h4>
                <p>Instagram: @dhumal_raspan_gruh</p>
                <p>Stay updated with our latest offers</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-gray-500 text-sm">
                © 2025 All rights reserved. | Designed by <b>Oskar Technologies</b>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;