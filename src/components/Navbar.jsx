import React from "react";
import {
  BinocularsIcon,
  BookmarkIcon,
  ClapperboardIcon,
  FilmIcon,
  LayoutGridIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* SIDEBAR */}
      <div className="hidden md:flex flex-col h-[70vh] w-18 bg-green-300 items-center gap-y-4 text-center md:ml-4 rounded-lg">
        <div className="mb-8 mt-4">
          <ClapperboardIcon size={28} />
        </div>
        <Link to="/">
          <LayoutGridIcon />
        </Link>
        <Link to="/search">
          <BinocularsIcon />
        </Link>
        <Link to="/series">
          <FilmIcon />
        </Link>
        <Link to="/bookmark">
          <BookmarkIcon />
        </Link>
      </div>

      {/* NAVBAR */}
      <div className="md:hidden bg-green-300 p-4">
        <div className="w-full flex justify-between">
          <div>
            <ClapperboardIcon size={28} />
          </div>
          <Link to="/">
            <LayoutGridIcon />
          </Link>
          <Link to="/search">
            <BinocularsIcon />
          </Link>
          <Link to="/series">
            <FilmIcon />
          </Link>
          <Link to="/bookmark">
            <BookmarkIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
