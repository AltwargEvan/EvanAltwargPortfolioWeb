import { Link } from "@tanstack/react-router";
import { Menu, Waypoints } from "lucide-react";
import React, { useState } from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Waypoints className="md:h-16 md:w-16 h-12 w-12" />
      <span className="hidden md:flex">Evan Altwarg</span>
    </div>
  );
};
const NavPages = () => {
  return (
    <>
      <Link to="/" className=" hover:text-neutral-200">
        Projects
      </Link>
      <Link to="/" className=" hover:text-neutral-200">
        About
      </Link>
    </>
  );
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen((prev) => !prev);
  return (
    <div className="sticky text-3xl">
      <div className="flex justify-between  items-center select-none absolute w-full py-8 ">
        <Link to="/" className="hover:text-neutral-200">
          <Logo />
        </Link>
        <Menu
          className="flex md:hidden hover:cursor-pointer h-12 w-12"
          onClick={toggleNav}
        />
        <div className="hidden md:flex  gap-12">
          <NavPages />
        </div>
      </div>
      <div
        className="bg-neutral-900 absolute transition-height md:hidden duration-500 w-full grid text-neutral-50  overflow-hidden top-[6.5rem]"
        style={{ height: navOpen ? 200 : 0 }}
      >
        <NavPages />
      </div>
    </div>
  );
};

export default Navbar;
