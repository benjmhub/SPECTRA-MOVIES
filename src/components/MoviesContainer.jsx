import { Icon } from "@iconify/react";
import MovieCard from "./MovieCard";

function MoviesContainer({ title }) {
  return (
    <>
      <div className="flex flex-row items-center mt-12 mb-8 mx-2 gap-10 text-brand-white/70">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="text-brand-gray">See More</span>
          <Icon icon="iconamoon:arrow-left-2-thin" className="rotate-180" />
        </div>
      </div>
      <div className="grid phone:grid-cols-1 tablet:grid-cols-2 grid-cols-4 gap-4 phone:gap-8 ">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

export default MoviesContainer;
