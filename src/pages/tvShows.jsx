import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import SlideContinueCard from "../components/slideContinueCard";
import SlideCollections from "../components/slideCollections";
import SlideGenre from "../components/slideGenre";
import HeroTVShowSection from "../components/heroTvShows";
import MoviesContainer from "../components/MoviesContainer";

function TvShows() {
  return (
    <div className="grid grid-cols-3 gap-3 phone:grid-cols-1">
      <div className="col-span-2 mx-4">
        <header className="text-brand-white flex items-center justify-between mr-6">
          <div className="flex items-center gap-4 text-3xl">
            <Icon icon="carbon:play-filled" className="text-brand-quaternary" />
            <h1 className="">SPECTRA</h1>
          </div>
          <nav>
            <ul className="flex items-center gap-6 justify-around text-lg font-semibold phone:hidden">
              <NavLink to="/" activeClassName="active">
                <span>Movies</span>
              </NavLink>
              <NavLink to="/tvshows" activeClassName="active">
                <span>TV Shows</span>
              </NavLink>
              <NavLink to="/discover" activeClassName="active">
                <span>Discover</span>
              </NavLink>
            </ul>

            <div className="phone:flex items-center justify-end gap-6 text-2xl text-white mr-6 hidden">
              <Icon icon="cil:search" />
              <Icon icon="mingcute:notification-newdot-fill" />
              <div className="w-10 h-10 overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="profile"
                  className="w-16 object-contain"
                />
              </div>
            </div>
          </nav>
        </header>

        <div>
          <div>
            <HeroTVShowSection />
          </div>
          <div>
            <MoviesContainer title="Popular on Spectra" />
            <MoviesContainer title="Suggested for You" />
          </div>
        </div>
      </div>

      <div className="col-span-1 w-full bg-brand-secondary text-white border-l-2 border-l-brand-gray/10">
        <div className="flex items-center justify-end gap-6 text-2xl text-white mr-6 phone:hidden">
          <Icon icon="cil:search" />
          <Icon icon="mingcute:notification-newdot-fill" />
          <div className="w-12 h-12 overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile"
              className="w-18 object-contain"
            />
          </div>
        </div>
        <div className="mx-2 sticky top-0">
          <SlideContinueCard />
          <SlideCollections />
          <SlideGenre />
        </div>
      </div>
    </div>
  );
}

export default TvShows;
