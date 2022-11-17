import { Navigate, Outlet } from "react-router-dom";
import React, { useState } from "react";

import Content from "./components/Content";
import SideBar from "./components/SideBar";
import useUserStore from "../store/useUserStore";
import useWindowSize from "../hooks/useWindowSize";

export default function DashboardLayout() {
  const { user, token } = useUserStore();

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

  if (!user && !token) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="App">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}>
        <Outlet />
      </Content>
    </div>
  );
}
