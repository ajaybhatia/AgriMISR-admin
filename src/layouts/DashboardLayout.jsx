import React, { useState } from "react";

import Content from "./components/Content";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import useWindowSize from "../hooks/useWindowSize";

export default function DashboardLayout() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  const windowSize = useWindowSize();

  React.useEffect(() => {
    if (windowSize.width <= 500) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [windowSize]);

  return (
    <div className="App">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}>
        <Outlet />
      </Content>
    </div>
  );
}
