import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";
import Button from "./Button";
import { Navigation } from "swiper/modules";

function SlideContinueCard() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-12 mb-8 mx-2">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Continue</h1>
          <div className="text-2xl font-semibold flex flex-row items-center gap-2">
            <button className="hover:text-brand-gray arrow-left arrow">
              <Icon icon="iconamoon:arrow-left-2-thin" />
            </button>
            <button className="hover:text-brand-gray arrow-right arrow">
              <Icon icon="iconamoon:arrow-left-2-thin" className="rotate-180" />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="text-brand-gray">See More</span>
          <Icon icon="iconamoon:arrow-left-2-thin" className="rotate-180" />
        </div>
      </div>

      {/* Start Swipper */}
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 6,
        //   },
        // }}
        modules={[Navigation]}
        className="w-full h-auto"
      >
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl w-56 p-2">
          <div className="bg-brand-tertiary">
            <div className="flex flex-row items-center gap-2">
              <div className="w-14 h-14 overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="profile"
                  className="w-20 object-contain"
                />
              </div>
              <div className="text-start w-full">
                <h3 className="text-base">You</h3>
                <p className="text-sm text-brand-gray">5 eposodes left</p>
                <hr className="w-full my-1 bg-brand-quaternary h-[2px] rounded" />
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between mt-2">
              <Button className="rotate-180 bg-white/20 rounded-xl h-10 text-center">
                <Icon icon="uiw:like-o" />
              </Button>
              <Button className="bg-brand-quaternary w-full text-base text-black rounded-xl h-10 px-4 text-center">
                Watch
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl w-56 p-2">
          <div className="bg-brand-tertiary">
            <div className="flex flex-row items-center gap-2">
              <div className="w-14 h-14 overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="profile"
                  className="w-20 object-contain"
                />
              </div>
              <div className="text-start w-full">
                <h3 className="text-base">You</h3>
                <p className="text-sm text-brand-gray">5 eposodes left</p>
                <hr className="w-full my-1 bg-brand-quaternary h-[2px] rounded" />
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between mt-2">
              <Button className="rotate-180 bg-white/20 rounded-xl h-10 text-center">
                <Icon icon="uiw:like-o" />
              </Button>
              <Button className="bg-brand-quaternary w-full text-base text-black rounded-xl h-10 px-4 text-center">
                Watch
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl w-56 p-2">
          <div className="bg-brand-tertiary">
            <div className="flex flex-row items-center gap-2">
              <div className="w-14 h-14 overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="profile"
                  className="w-20 object-contain"
                />
              </div>
              <div className="text-start w-full">
                <h3 className="text-base">You</h3>
                <p className="text-sm text-brand-gray">5 eposodes left</p>
                <hr className="w-full my-1 bg-brand-quaternary h-[2px] rounded" />
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between mt-2">
              <Button className="rotate-180 bg-white/20 rounded-xl h-10 text-center">
                <Icon icon="uiw:like-o" />
              </Button>
              <Button className="bg-brand-quaternary w-full text-base text-black rounded-xl h-10 px-4 text-center">
                Watch
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlideContinueCard;
