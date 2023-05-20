import React from "react";

const PlayList = () => {
  return (
    <nav className="mx-6 mt-4 py-2 flex-auto  overflow-auto  border-t border-white border-opacity-10 ">
      <ul>
        {new Array(20).fill(
          <li>
            <a
              href="a"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              Rock'n Roll Night
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default PlayList;
