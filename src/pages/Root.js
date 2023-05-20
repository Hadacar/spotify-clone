import Sidebar from "components/Sidebar";
import Bottombar from "components/Bottombar";
import "../index.css";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";

function Root() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <main className="flex-auto overflow-auto">
          <Navbar />
          <div className=" px-8 pt-5">
            <Outlet />
          </div>
        </main>
      </div>
      <Bottombar />
    </>
  );
}

export default Root;
