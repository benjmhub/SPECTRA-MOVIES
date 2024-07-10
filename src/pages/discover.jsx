import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

function Discover() {
  return (
    <div>
      <header className="text-brand-white flex items-center justify-between mr-6">
        <div className="flex items-center gap-4 text-3xl">
          <Icon icon="carbon:play-filled" className="text-brand-quaternary" />
          <h1 className="">SPECTRA</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-6 justify-around text-lg font-semibold">
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
        </nav>
        <div className="flex items-center justify-end gap-6 text-2xl text-white mr-6">
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
      </header>
    </div>
  );
}

export default Discover;
