import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";
import Button from "./Button";
import { Navigation } from "swiper/modules";

function SlideCollections() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-12 mb-8 mx-2">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Collections</h1>
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

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        modules={[Navigation]}
        className="w-full h-auto"
      >
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl overflow-hidden w-56">
          <div
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "150px",
            }}
          >
            <div className="w-full h-full flex flex-col justify-between p-2 ">
              <h1 className="text-start">Mind Blowing</h1>
              <div className="flex items-center gap-2 justify-between mt-2">
                <Button className="rotate-180 bg-white/20 rounded-xl h-10 text-center">
                  <Icon icon="quill:add" />{" "}
                </Button>
                <Button className="bg-brand-quaternary w-full text-base text-black rounded-xl h-10 px-4 text-center">
                  Watch
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl overflow-hidden w-56">
          <div
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "140px",
            }}
          >
            <div className="w-full h-full flex flex-col justify-between p-2 ">
              <h1 className="text-start">Mind Blowing</h1>
              <div className="flex items-center gap-2 justify-between mt-2">
                <Button className="rotate-180 bg-white/20 rounded-xl h-10 text-center">
                  <Icon icon="quill:add" />{" "}
                </Button>
                <Button className="bg-brand-quaternary w-full text-base text-black rounded-xl h-10 px-4 text-center">
                  Watch
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl overflow-hidden w-56">
          <div
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "140px",
            }}
          >
            <div className="w-full h-full flex flex-col justify-between p-2 ">
              <h1 className="text-start">Mind Blowing</h1>
              <div className="flex items-center gap-2 justify-between mt-2">
                <Button className="rotate-180 bg-white/20 rounded-xl h-10 text-center">
                  <Icon icon="quill:add" />{" "}
                </Button>
                <Button className="bg-brand-quaternary w-full text-base text-black rounded-xl h-10 px-4 text-center">
                  Watch
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlideCollections;
