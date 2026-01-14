import Title from "./Title";
import { testimonialsItems } from "../constants/data.js";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Testimonials() {
  return (
    <section>
      <div className="container">
        {/*Title*/}
        <Title
          title="Our Testimonials"
          text="Lorem Ipsum dolor sit amet tinicut etiam elit id imperidat et. Lorem Ipsum dolor sit amet tinicut etiam elit id imperidat et."
          link="View All"
        />
        {/*Card Wrapper*/}
        <Swiper
          // sensible defaults
          spaceBetween={30} // default spacing (px)
          modules={[Navigation, Autoplay]}
          className="mt-14 lg:mt-16"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          loop={true}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        >
          {" "}
          {testimonialsItems.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="bg-white border-white-95 rounded-md p-8 lg:p-10 space-y-3"
            >
              <p>{item.text}</p>
              <div className="flex item-center justify-between flex-wrap pt-4 border-t border-t-orange-90 gap-4">
                <div className="flex items-center gap-3">
                  <div className="">
                    <img
                      src={item.img}
                      alt={item.author}
                      width={50}
                      height={50}
                    />
                  </div>

                  <p className="font-medium">{item.author}</p>
                </div>

                <button className="secondary-btn">Read Full Story</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*Navigation Buttons*/}
        <div className="flex items-center justify-center mt-18 gap-5 ">
          <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-md hover:bg-orange-75 transition-colors active:bg-orange-75/80 prev-btn">
            <RiArrowLeftLine size={30} />
          </button>
          <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-md hover:bg-orange-75 transition-colors active:bg-orange-75/80 next-btn">
            <RiArrowRightLine size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
