import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import React, { useState } from "react";

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
    <div className="sticky">
      <div className="flex justify-between text-5xl items-center select-none absolute w-full py-8">
        <Link to="/" className="hover:text-neutral-200 hover:">
          Logo Here
        </Link>
        <Menu
          className="flex md:hidden hover:cursor-pointer"
          size={48}
          onClick={toggleNav}
        />
        <div className="hidden md:flex text-3xl gap-12">
          <NavPages />
        </div>
      </div>
      <div
        className="bg-neutral-900 absolute transition-height md:hidden duration-500 w-full grid text-neutral-50 text-3xl overflow-hidden top-[6.5rem]"
        style={{ height: navOpen ? 200 : 0 }}
      >
        <NavPages />
      </div>
    </div>
  );
};

export default Navbar;
