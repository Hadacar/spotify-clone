import React from "react";
import { Menu } from "@headlessui/react";

const Auth = () => {
  const user = {
    name: "Alperen",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW105_VIC_GSG8DS_dQ1iT6M9bBZtB5wmI7LrvOfRAvg&s",
  };

  return (
    <Menu as="nav" className={"relative"}>
      {({open}) => (
        <>
          <Menu.Button
            className={
              `flex items-center h-10 rounded-3xl pr-2 bg-black ${open ?"bg-active":"bg-black"} hover:bg-active`
            }
          >
            <img
              src={user.avatar}
              alt=""
              className="w-10 h-10 rounded-full px-0.5 mr-2 "
            />
            <span className="text-sm font-semibold">{user.name}</span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute top-full right-0 w-48 bg-active rounded-md translate-y-2 p-1"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-cener p-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="1"
                >
                  Account 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-cener p-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="1"
                >
                  Profile 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-cener p-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="1"
                >
                  Log out 
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
