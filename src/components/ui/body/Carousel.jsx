// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper border-t-2 border-b-2 border-bistre"
      >
        <SwiperSlide>
          <div className="h-[30rem]">
            <img
              className="w-full h-full object-cover"
              src="../img/photo-1.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30rem]">
            <img className="h-full object-cover" src="../img/photo-2.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30rem]">
            <img className="h-full object-cover" src="../img/photo-3.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30rem]">
            <img
              className="h-full w-full object-cover"
              src="../img/photo-4.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30rem]">
            <img
              className="h-full w-full object-cover"
              src="../img/photo-5.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30rem]">
            <img
              className="h-full w-full object-cover"
              src="../img/photo-6.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30rem]">
            <img
              className="h-full w-full object-cover"
              src="../img/photo-7.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30rem]">
            <img
              className="h-full w-full object-cover"
              src="../img/photo-8.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30rem]">
            <img
              className="h-full w-full object-cover"
              src="../img/photo-9.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
