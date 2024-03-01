import React from "react";
import { Link } from "react-scroll";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center justify-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.path}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
