import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

const Banner = () => {
  return (
    <div className="flex h-screen w-screen items-center">
      <div className="z-10 absolute w-screen h-screen bg-purple-300/25"></div>
      <div className="h-screen max-w-screen w-screen z-20 p-5">
        <div className="flex flex-col text-white text-shadow-2xl items-center mt-40 m-auto lg:max-w-[1200px]">
          <h1 className="lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-4xl lg:text-6xl font-bold font-body">CHOOSE YOUR HOME WITH US</span>
          </h1>
          <p className="max-w-[600px] w-full flex items-center font-bold font-body2 text-lg lg:text-3xl mb-8">
          With everything you have ever dreamt of at your fingertips, you may not want to leave.
          </p>
          <div className="flex justify-evenly w-96 mt-10">
            <Link href="/uploadHouse">
              <button className="bg-blue-600 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg">
                OWNER
              </button>
            </Link>
            <Link href="/house">
              <button className="bg-blue-600 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg">
                CUSTOMER
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-screen absolute z-0 right-0 bottom-0 h-screen">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="object-fill w-full h-screen rounded-md"
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
              alt="image slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill w-full h-screen rounded-md"
              src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2022/1/27/4-cent-trivandrum-home-view.jpg"
              alt="image slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill w-full h-screen rounded-md"
              src="https://foyr.com/learn/wp-content/uploads/2022/02/best-home-staging-ideas-to-sell-your-house.jpg"
              alt="image slide 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
