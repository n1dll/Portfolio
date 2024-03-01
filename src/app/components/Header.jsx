"use client";
import React, { useState, useRef } from "react";
// import NavLink from "./NavLink";

import Navbar from './Navbar'
import HeaderRig from "./HeaderRig";
import { menuVars, containerVars } from '../navbarAnimationValues'

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between z-50 border-b border-border/40 bg-background">
      <Navbar />
    </header>
  )
}



export default Header;
