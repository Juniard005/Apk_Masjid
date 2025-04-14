import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/layout/Dashboard";
import { useState } from "react";
import RoutesIndex from "./routes";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle} />
        <Dashboard
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>
      <div className="container">
        <RoutesIndex />
      </div>
    </>
  );
}

export default App;
