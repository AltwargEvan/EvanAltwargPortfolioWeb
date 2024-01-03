import { Link, Route } from "wouter";

const Navbar = () => {
  return (
    <div className="w-full bg-neutral-900 text-white px-12 py-4 text-2xl">
      <Link href="/">
        <a className="">Home</a>
      </Link>
    </div>
  );
};
export default Navbar;
