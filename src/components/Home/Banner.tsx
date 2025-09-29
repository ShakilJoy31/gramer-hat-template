"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Example images (replace with your own assets)
import banner1 from "../../../public/Product-image/onion.png";
import banner2 from "../../../public/Product-image/Strawberrie.png";
import banner3 from "../../../public/Product-image/Kale-Sprouts.png";

export default function Banner() {
  const slides = [
    {
      id: 1,
      title: "The Best Quality Products Guaranteed!",
      desc: "Dramatically facilitate effective total linkage for go forward processes...",
      img: banner1,
    },
    {
      id: 2,
      title: "Fresh Organic Vegetables Delivered!",
      desc: "Get your daily needs from our Kacha Bazar store...",
      img: banner2,
    },
    {
      id: 3,
      title: "Fresh Organic Vegetables Delivered!",
      desc: "Get your daily needs from our Kacha Bazar store...",
      img: banner3,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              el: ".banner-pagination",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Left content */}
                    <div className="p-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                        {slide.title}
                      </h2>
                      <p className="text-gray-600 mb-5">{slide.desc}</p>
                      <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
                        Shop Now
                      </button>
                    </div>
                    {/* Right image */}
                    <div className="relative w-full h-64 md:h-80">
                      <Image
                        src={slide.img}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Pagination */}
          <div className="banner-pagination !relative mt-4 flex justify-center"></div>
        </motion.div>

        {/* Right: Coupon section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-amber-50 border border-red-400 rounded-lg p-4 flex flex-col"
        >
          <h3 className="text-center font-semibold text-gray-800 mb-3">
            Latest Super Discount Active Coupon Code
          </h3>

          {/* Coupon 1 */}
          <div className="flex items-center justify-between bg-white p-3 mb-3 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Image
                src={banner1}
                alt="Coupon 1"
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div>
                <p className="font-semibold text-red-500 text-sm">50% Off</p>
                <p className="text-xs text-gray-600">August Gift Voucher</p>
                <span className="text-xs text-white bg-red-400 px-2 py-0.5 rounded">
                  Inactive
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-bold">AUGUST24</p>
              <p className="text-xs text-gray-500">
                *This coupon apply when shopping more then $2000
              </p>
            </div>
          </div>

          {/* Coupon 2 */}
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Image
                src={banner2}
                alt="Coupon 2"
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div>
                <p className="font-semibold text-green-600 text-sm">10% Off</p>
                <p className="text-xs text-gray-600">Summer Gift Voucher</p>
                <span className="text-xs text-white bg-green-500 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-bold">SUMMER26</p>
              <p className="text-xs text-gray-500">
                *This coupon apply when shopping more then $500
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-amber-100 mt-6 rounded-lg container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div>
          <h4 className="text-green-700 font-bold text-lg">
            100% Natural Quality Organic Product
          </h4>
          <p className="text-gray-600 text-sm">
            See Our latest discounted products from here and get a special discount product
          </p>
        </div>
        <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
}
