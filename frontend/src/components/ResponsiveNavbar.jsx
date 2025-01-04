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
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.1 }}
            className="absolute top-20 left-0 w-full h-screen z-20"
          >
            <div
              className={`text-2xl font-semibold uppercase bg-black text-white py-10 m-6 rounded-3xl`}
            >
              <ul className="flex flex-col justify-center items-center gap-10">
                {NavBarMenu.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`cursor-pointer hover:text-indigo-600`}
                      onClick={() => setOpen(false)}
                    >
                      <AnchorLink href={item.link}>{item.title}</AnchorLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveMenu;
