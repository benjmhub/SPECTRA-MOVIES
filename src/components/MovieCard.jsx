import React from "react";
import ReactStars from "react-rating-stars-component";
import Button from "./Button";
import { Icon } from "@iconify/react";
function MovieCard() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/25489323/pexels-photo-25489323/free-photo-of-a-restaurant-with-plants-and-flowers-in-front-of-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "300px",
        borderRadius: "15px",
        position: "relative",
      }}
    >
      <div className="absolute w-full h-full p-4 bg-gradient-to-t from-black/80">
        <div className="relative w-full h-full">
          <h1 className="text-xl font-medium text-brand-white/70">
            Game of Thrones
          </h1>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#B0EDDB"
          />
          <div className="mt-36">
            <div className="flex items-center font-normal justify-between text-brand-gray">
              <p>6 Ep</p>
              <p>Documentary</p>
            </div>
            <div className="flex items-center gap-2 justify-between mt-2">
              <Button className="rotate-180 bg-white/20 rounded-xl h-10 text-center">
                <Icon icon="quill:add" />{" "}
              </Button>
              <Button className="bg-brand-quaternary text-base text-black rounded-xl h-10 px-4 text-center">
                Watch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
