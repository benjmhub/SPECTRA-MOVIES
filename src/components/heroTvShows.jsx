import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Button from "./Button";

export default function HeroTVShowSection() {
  return (
    <>
      <div className="mt-6 mb-4 mr-6 phone:mr-0 overflow-hidden">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="w-full rounded-xl overflow-hidden"
        >
          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "500px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="absolute w-full h-full bg-black/20">
              <div className="absolute text-brand-white text-start phone:ml-12 ml-20 mt-40 w-full h-full  ">
                <h1 className="text-3xl ">Killing Eve</h1>
                <p className="text-base my-4">
                  After a series of events. the lives of a <br />
                  security operative and an assassin <br /> become inextricably
                </p>

                <div className="flex flex-row items-center gap-4 mt-2">
                  <Button className="bg-brand-quaternary text-base text-black rounded-xl h-10 px-4 text-center">
                    Watch
                  </Button>
                  <Button className="bg-white/10 rounded-xl h-10 text-center flex items-center gap-2">
                    <Icon
                      icon="iconamoon:arrow-up-2-thin"
                      className="rotate-180 text-xl fon"
                    />{" "}
                    <p className="font-light">Details</p>
                  </Button>
                  <Button className="bg-white/10 rounded-xl h-10 text-center">
                    <Icon icon="quill:add" />{" "}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "500px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="absolute w-full h-full bg-black/20">
              <div className="absolute text-brand-white text-start ml-20 mt-40 w-full h-full  ">
                <h1 className="text-3xl ">Killing Eve</h1>
                <p className="text-base my-4">
                  After a series of events. the lives of a <br />
                  security operative and an assassin <br /> become inextricably
                </p>

                <div className="flex flex-row items-center gap-4 mt-2">
                  <Button className="bg-brand-quaternary text-base text-black rounded-xl h-10 px-4 text-center">
                    Watch
                  </Button>
                  <Button className="bg-white/10 rounded-xl h-10 text-center flex items-center gap-2">
                    <Icon
                      icon="iconamoon:arrow-up-2-thin"
                      className="rotate-180 text-xl fon"
                    />{" "}
                    <p className="font-light">Details</p>
                  </Button>
                  <Button className="bg-white/10 rounded-xl h-10 text-center">
                    <Icon icon="quill:add" />{" "}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "500px",
              position: "relative",
            }}
          >
            <div className="absolute w-full h-full bg-black/20">
              <div className="absolute text-brand-white text-start ml-20 mt-40 w-full h-full  ">
                <h1 className="text-3xl ">Killing Eve</h1>
                <p className="text-base my-4">
                  After a series of events. the lives of a <br />
                  security operative and an assassin <br /> become inextricably
                </p>

                <div className="flex flex-row items-center gap-4 mt-2">
                  <Button className="bg-brand-quaternary text-base text-black rounded-xl h-10 px-4 text-center">
                    Watch
                  </Button>
                  <Button className="bg-white/10 rounded-xl h-10 text-center flex items-center gap-2">
                    <Icon
                      icon="iconamoon:arrow-up-2-thin"
                      className="rotate-180 text-xl fon"
                    />{" "}
                    <p className="font-light">Details</p>
                  </Button>
                  <Button className="bg-white/10 rounded-xl h-10 text-center">
                    <Icon icon="quill:add" />{" "}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
