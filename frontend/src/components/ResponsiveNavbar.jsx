import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavBarMenu } from "../assets/images/data";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen z-30 bg-black/80 backdrop-blur-lg flex justify-center items-center"
          >
            <div className="w-11/12 max-w-md bg-white text-gray-800 rounded-3xl shadow-xl py-8 px-6">
              <ul className="flex flex-col items-center gap-6">
                {NavBarMenu.map((item) => (
                  <li
                    key={item.id}
                    className="text-lg font-medium text-gray-700 hover:text-green-700 transition-all"
                  >
                    <AnchorLink
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 rounded-md hover:bg-green-100"
                    >
                      {item.title}
                    </AnchorLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveMenu;
