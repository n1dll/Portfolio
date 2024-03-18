"use client"

import { React, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { menuVars, containerVars, mobileLinkVars } from '../navbarAnimationValues'
import MenuButton from './MenuButton'
import HeaderRig from "./HeaderRig";

const navLinks = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav className="sticky top-0 flex justify-between z-50 border-b border-border/40 bg-background">
      <div className="flex relative justify-between w-full">
        <MenuButton open={open} toggleMenu={toggleMenu} />
        <HeaderRig />
      </div>

      <div className="md:flex hidden items-center px-8 py-8 md:py-4 lg:py-4">
        <div className="menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="cursor-pointer"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed origin-top top-0 mt-14 w-full md:hidden border-b border-border/40 bg-background"
          >
            <div className="flex h-full flex-col py-2">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex h-full justify-center items-center gap-4 "
              >

                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="cursor-pointer"
                  >{link.title}</Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


export default Navbar