import React, { useState } from "react";
import { assets } from "../assets/images/assets";
import { IoFastFood } from "react-icons/io5";
import { NavBarMenu } from "../assets/images/data";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useNavigate } from "react-router-dom"; // import Link and useNavigate
import { AiOutlineClose } from "react-icons/ai"; // import AiOutlineClose
import { GiHamburgerMenu } from "react-icons/gi"; // import GiHamburgerMenu

const NavBar = () => {
  const [open, setOpen] = useState(false); // manage open state for mobile menu
  const [menu, setMenu] = useState(""); // manage selected menu item
  const navigate = useNavigate(); // hook for navigation

  return (
    <div>
      <nav className="">
        <div className="container flex justify-between items-center py-8">
          {/* logo section */}
          <div
            onClick={() => navigate("/")}
            className={`text-2xl flex items-center gap-2 cursor-pointer font-bold uppercase`}
          >
            <IoFastFood className="size-9 text-green-500" />
          </div>
          {/* menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-5 text-gray-600 ">
              {NavBarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      onClick={() => {
                        setMenu(item.title);
                      }}
                    >
                      <AnchorLink
                        href={item.link}
                        className={`inline-block p-3 text-sm hover:bg-gray-300 rounded-lg font-semibold`}
                      >
                        {item.title}
                      </AnchorLink>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* sign-in section */}
          {false ? ( // Replace with your condition for sign-in vs dashboard
            <Link
              to={"/dashboard"}
              className={`px-5 py-3 bg-black hover:bg-black/50 text-white rounded-md text-sm font-medium hidden lg:block `}
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to={"/signup"}
              className={`px-5 py-3 bg-black hover:bg-black/50 text-white rounded-md text-sm font-medium hidden lg:block `}
            >
              Sign In / Register
            </Link>
          )}
          {/* mobile hamburger menu section */}
          <div onClick={() => setOpen((prev) => !prev)} className="lg:hidden">
            {open ? (
              <AiOutlineClose className="text-3xl cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
