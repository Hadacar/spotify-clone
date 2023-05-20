import Icon from "components/Icons";
import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-col">
          <li>
            <NavLink
              to="/"
              className= {({isActive })=>isActive?"bg-active text-white h-10 flex items-center text-sm font-semibold rounded px-4 ":"h-10 flex items-center text-sm font-semibold rounded text-link hover:text-white px-4"}
            >
              <span className="pr-3">
                <Icon name="home" />
              </span>
              Ana Sayfa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="search"
              className= {({isActive })=>isActive?"bg-active text-white h-10 flex items-center text-sm font-semibold rounded px-4 ":"h-10 flex items-center text-sm font-semibold rounded text-link hover:text-white px-4"}
            >
              <span className="pr-3">
                <Icon name="search" />
              </span>
              Ara
            </NavLink>
          </li>
          <li>
            <NavLink
              to="library"
            
              className= {({isActive })=>isActive?"bg-active text-white h-10 flex items-center text-sm font-semibold rounded px-4 ":"h-10 flex items-center text-sm font-semibold rounded text-link hover:text-white px-4"}
            >
              <span className="pr-3">
                <Icon name="library" />
              </span>
              Kitaplığın
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
