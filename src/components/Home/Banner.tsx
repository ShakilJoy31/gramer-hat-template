"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaArrowRight, FaStar, FaTruck, FaShieldAlt, FaRecycle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Example images (replace with your own assets)
import banner1 from "../../../public/Product-image/onion.png";
import banner2 from "../../../public/Product-image/Strawberrie.png";
import banner3 from "../../../public/Product-image/Kale-Sprouts.png";
import banner4 from "../../../public/Product-image/carrots.png";


export default function Banner() {
  const slides = [
    {
      id: 1,
      title: "Fresh Organic Carrots",
      subtitle: "Vine-Ripened Perfection",
      desc: "Juicy, sun-kissed tomatoes bursting with flavor, harvested at perfect ripeness from our organic farms",
      img: banner4,
      bgGradient: "from-red-500 to-rose-600",
      textColor: "text-white",
      buttonStyle: "bg-white text-red-600 hover:bg-red-50",
      badge: "Farm Fresh"
    },
    {
      id: 1,
      title: "Farm Fresh Organic Vegetables",
      subtitle: "100% Certified Organic",
      desc: "Harvested at peak freshness from our sustainable farms, delivered straight to your doorstep",
      img: banner1,
      bgGradient: "from-emerald-500 to-green-600",
      textColor: "text-white",
      buttonStyle: "bg-white text-emerald-600 hover:bg-emerald-50",
      badge: "Seasonal Special"
    },
    {
      id: 2,
      title: "Sweet Organic Berries",
      subtitle: "Sun-Ripened Perfection",
      desc: "Naturally sweet berries packed with antioxidants and flavor. Perfect for your healthy lifestyle",
      img: banner2,
      bgGradient: "from-rose-500 to-pink-600",
      textColor: "text-white",
      buttonStyle: "bg-white text-rose-600 hover:bg-rose-50",
      badge: "New Harvest"
    },
    {
      id: 3,
      title: "Fresh Microgreens",
      subtitle: "Nutrient-Dense Superfoods",
      desc: "Power-packed microgreens with concentrated vitamins and minerals for optimal health",
      img: banner3,
      bgGradient: "from-teal-500 to-cyan-600",
      textColor: "text-white",
      buttonStyle: "bg-white text-teal-600 hover:bg-teal-50",
      badge: "Limited Stock"
    },
  ];

  const features = [
    { icon: FaTruck, text: "Free Delivery", subtext: "Over $50" },
    { icon: FaShieldAlt, text: "Quality Guarantee", subtext: "100% Organic" },
    { icon: FaRecycle, text: "Eco Packaging", subtext: "Sustainable" },
    { icon: FaLeaf, text: "Farm Fresh", subtext: "Daily Harvest" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Main Banner Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-12">
          {/* Hero Carousel - 3/4 width */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="xl:col-span-3"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                effect="fade"
                speed={1000}
                pagination={{
                  clickable: true,
                  el: ".hero-pagination",
                  renderBullet: (className) => {
                    return `<span class="${className} !w-3 !h-3 !bg-white/80 !mx-1 !rounded-full !transition-all !duration-300 hover:!scale-125"></span>`;
                  },
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                modules={[Pagination, Autoplay, EffectFade]}
                className="hero-swiper"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className={`relative min-h-[850px] lg:min-h-[600px] bg-gradient-to-br ${slide.bgGradient}`}>
                      {/* Content */}
                      <div className="absolute inset-0 z-10 flex items-center">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            {/* Text Content */}
                            <motion.div
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className={`${slide.textColor} space-y-6 lg:col-span-2 `}
                            >
                              {/* Badge */}
                              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                                <FaSeedling className="text-white" />
                                <span className="font-semibold text-sm">{slide.badge}</span>
                              </div>

                              {/* Title */}
                              <h1 className="text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                                {slide.title}
                              </h1>

                              {/* Subtitle */}
                              <p className="lg:text-xl font-semibold opacity-90">
                                {slide.subtitle}
                              </p>

                              {/* Description */}
                              <p className="text-sm lg:text-lg opacity-80 leading-relaxed max-w-2xl">
                                {slide.desc}
                              </p>

                              {/* CTA Button */}
                              <motion.button
                                whileHover={{ scale: 1.05, x: 10 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${slide.buttonStyle} px-8 py-4 rounded-2xl font-bold text-lg w-full lg:w-auto shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 group`}
                              >
                                Shop Now
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                              </motion.button>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="relative h-96 lg:h-[500px] "
                            >
                              <Image
                                src={slide.img}
                                alt={slide.title}
                                fill
                                className="object-cover drop-shadow-2xl w-full"
                                priority
                              />

                              {/* Floating Elements */}
                              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                                <FaStar className="text-white text-2xl" />
                              </div>
                              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                <FaLeaf className="text-white text-4xl" />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                          backgroundSize: '50px 50px'
                        }}></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination */}
              <div className="hero-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex justify-center"></div>
            </div>
          </motion.div>

          {/* Premium Offers Sidebar - 1/4 width */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >


            {/* Premium Coupon 1 */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 text-white shadow-2xl overflow-hidden group cursor-pointer"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      <FaStar className="text-yellow-300" />
                      Premium Offer
                    </div>
                    <h4 className="text-xl font-black mb-1">50% OFF</h4>
                    <p className="text-amber-100 text-sm">Organic Vegetables</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="font-black text-2xl">AUGUST24</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-amber-100 text-sm">Min. spend $200</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-amber-600 px-4 py-2 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Use Code
                  </motion.button>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.div>

            {/* Premium Coupon 2 */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      <FaLeaf className="text-green-300" />
                      Fresh Deal
                    </div>
                    <h4 className="text-xl font-black mb-1">30% OFF</h4>
                    <p className="text-green-100 text-sm">All Fruits</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="font-black text-2xl">FRESH30</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-green-100 text-sm">Min. spend $100</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 px-4 py-2 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Use Code
                  </motion.button>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-2xl border border-green-100"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <FaSeedling />
                  Trusted By
                </div>
                <h4 className="text-3xl font-black text-gray-900 mb-2">10K+</h4>
                <p className="text-gray-600 text-sm">Happy Families</p>
                <div className="flex justify-center mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-amber-400 text-sm mx-0.5" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-green-100 p-4 lg:p-8"
        >
          <div className="grid grid-cols-4 gap-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h4 className="font-bold text-gray-900 text-[12px] lg:text-lg mb-1">{feature.text}</h4>
                <p className="text-gray-600 text-[10px]">{feature.subtext}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                  Start Your Healthy Journey Today
                </h3>
                <p className="text-emerald-100 text-md md:text-lg leading-relaxed">
                  Join thousands of families who trust us for the freshest, most nutritious organic produce delivered to their doorstep
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-2xl font-bold text-md md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  Browse Products
                  <FaArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-4 py-2 rounded-2xl font-bold text-lg transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .hero-swiper {
          border-radius: 1.5rem;
          overflow: hidden;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.4);
        }
        
        .hero-swiper .swiper-slide {
          opacity: 0 !important;
          transition: opacity 1s ease-in-out;
        }
        
        .hero-swiper .swiper-slide-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}