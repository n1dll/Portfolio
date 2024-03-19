"use client";
import React, { useState, useRef } from "react";
// import NavLink from "./NavLink";

import Navbar from './Navbar'
import HeaderRig from "./HeaderRig";
import { menuVars, containerVars } from '../navbarAnimationValues'

const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  )
}



export default Header;
