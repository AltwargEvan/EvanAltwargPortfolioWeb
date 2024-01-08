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
      <Link to="/" className=" hover:text-neutral-200">
        Contact
      </Link>
    </>
  );
};
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen((prev) => !prev);
  return (
    <>
      <div className="sticky text-neutral-50 flex justify-between px-8 py-8 text-5xl items-center select-none">
        <Link to="/" className="hover:text-neutral-200 hover:">
          Evan Altwarg
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
        className="transition-height md:hidden duration-500 grid text-neutral-50 text-3xl px-8 overflow-hidden"
        style={{ height: navOpen ? 200 : 0 }}
      >
        <NavPages />
      </div>
    </>
  );
};

export default Navbar;
