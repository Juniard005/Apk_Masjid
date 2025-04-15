import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import RoutesIndex from "../routes";

function Layouts({ children }) {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <Sidebar sidebarToggle={sidebarToggle} />

        <div
          className={`${
            sidebarToggle ? "w-full" : "ml-64"
          } flex flex-col flex-1`}
        >
          {/* Navbar */}
          <Navbar
            setSidebarToggle={setSidebarToggle}
            sidebarToggle={sidebarToggle}
          />

          {/* Content */}
          <main className="flex-1 overflow-auto">
            <RoutesIndex />
          </main>
        </div>
      </div>
    </>
  );
}

export default Layouts;
