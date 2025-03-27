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
      <div className="hidden md:flex flex-col h-[70vh] w-18 bg-[#161d2f] items-center gap-y-4 text-center md:ml-4 rounded-lg">
        <div className="mb-8 mt-4">
          <ClapperboardIcon size={28} color="#fff" />
        </div>
        <Link to="/">
          <LayoutGridIcon color="#fff" />
        </Link>
        <Link to="/search">
          <BinocularsIcon color="#fff" />
        </Link>
        <Link to="/series">
          <FilmIcon color="#fff" />
        </Link>
        <Link to="/bookmark">
          <BookmarkIcon color="#fff" />
        </Link>
      </div>

      {/* NAVBAR */}
      <div className="md:hidden  bg-[#161d2f] p-4">
        <div className="w-full flex justify-between">
          <div>
            <ClapperboardIcon size={28} color="#fff" />
          </div>
          <Link to="/">
            <LayoutGridIcon color="#fff" />
          </Link>
          <Link to="/search">
            <BinocularsIcon color="#fff" />
          </Link>
          <Link to="/series">
            <FilmIcon color="#fff" />
          </Link>
          <Link to="/bookmark">
            <BookmarkIcon color="#fff" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
