import { SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import "swiper/css/grid";
import "swiper/css";
import "swiper/css/navigation";

function SlideGenre() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-12 mb-8 mx-2">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Genres</h1>
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
      <div className="grid grid-cols-2 gap-4">
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl overflow-hidden">
          <div
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "130px",
            }}
            className="relative"
          >
            <div className="absolute w-full h-full bg-black/30">
              <div className="w-full h-full flex items-center flex-row justify-center">
                <h1 className="text-start">Mind Blowing</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl overflow-hidden">
          <div
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "130px",
            }}
            className="relative"
          >
            <div className="absolute w-full h-full bg-black/30">
              <div className="w-full h-full flex items-center flex-row justify-center">
                <h1 className="text-start">Mind Blowing</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl overflow-hidden">
          <div
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "130px",
            }}
            className="relative"
          >
            <div className="absolute w-full h-full bg-black/30">
              <div className="w-full h-full flex items-center flex-row justify-center">
                <h1 className="text-start">Mind Blowing</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-brand-tertiary border-2 border-brand-gray/10 rounded-2xl overflow-hidden">
          <div
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "130px",
            }}
            className="relative"
          >
            <div className="absolute w-full h-full bg-black/30">
              <div className="w-full h-full flex items-center flex-row justify-center">
                <h1 className="text-start">Mind Blowing</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </div>
  );
}

export default SlideGenre;
