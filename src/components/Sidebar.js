import React from "react";
import logo from "images/logo.svg";
import Menu from "./Sidebar/Menu";
import Icon from "./Icons";
import PlayList from "./Sidebar/PlayList";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover.js";

const Sidebar = () => {
	const sidebar = useSelector(state => state.player.sidebar)


  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col">
      <a href="a" className="mb-7 px-6">
        <img src={logo} alt="" className="h-10" />
      </a>
      <Menu />
    
      <nav className="mt-6">
        <ul>
          <li>
            <a href="s" className="py-2 px-6 flex text-sm text-link font-semibold hover:text-white group ">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 text-black rounded-sm">
                <Icon name="plus" size={12} /> 
              </span>
              Çalma Listesi Oluştur

            </a>
          </li>
          <li>
            <a href="s" className="py-2 px-6 flex text-sm text-link font-semibold hover:text-white group">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm opacity-60 group-hover:opacity-100">
                <Icon name="heart" size={12} /> 
              </span>
              Beğenilen şarkıları çal

            </a>
          </li>
        </ul>
      </nav>

      <PlayList/>

      {sidebar && <SidebarCover />}

    </aside>
  );
};

export default Sidebar;
