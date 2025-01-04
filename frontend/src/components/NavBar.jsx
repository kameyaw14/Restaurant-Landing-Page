import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { NavBarMenu } from "../assets/images/data";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveNavbar";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md">
      <nav className="w-full">
        <div className="container mx-auto flex justify-between items-center py-6 px-4 lg:px-10">
          {/* Logo Section */}
          <div
            onClick={() => navigate("/")}
            className="text-3xl flex items-center gap-2 cursor-pointer font-bold uppercase text-green-700"
          >
            <IoFastFood className="text-4xl" />
            <span className="font-serif">TasteHub</span>
          </div>
          {/* Menu Section */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8 text-gray-700 font-medium">
              {NavBarMenu.map((item) => (
                <li key={item.id}>
                  <AnchorLink
                    href={item.link}
                    className="inline-block px-4 py-2 hover:bg-green-100 hover:text-green-700 transition-all duration-300 rounded-md"
                    onClick={() => setMenu(item.title)}
                  >
                    {item.title}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Sign-in Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {false ? (
              <Link
                to="/dashboard"
                className="px-5 py-3 bg-green-700 text-white rounded-md hover:bg-green-600 transition-all text-sm font-medium"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/signup"
                className="px-5 py-3 bg-green-700 text-white rounded-md hover:bg-green-600 transition-all text-sm font-medium"
              >
                Sign In / Register
              </Link>
            )}
          </div>
          {/* Mobile Hamburger Menu */}
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden text-gray-700 cursor-pointer z-50"
          >
            {open ? (
              <AiOutlineClose className="text-3xl text-white" />
            ) : (
              <GiHamburgerMenu className="text-3xl" />
            )}
          </div>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavBar;
