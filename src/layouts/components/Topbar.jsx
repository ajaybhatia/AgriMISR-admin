import {
  Button,
  Collapse,
  Nav,
  NavLink,
  Navbar,
  NavbarToggler,
} from "reactstrap";
import React, { useState } from "react";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";

import { IoPersonCircleOutline } from "react-icons/io5";

export default function Topbar({ sidebarIsOpen, toggleSidebar }) {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar className="navbar shadow-sm bg-white rounded" expand="md">
      <Button className="btn-menu-toggle" onClick={toggleSidebar}>
        {sidebarIsOpen ? (
          <TbLayoutSidebarLeftCollapse />
        ) : (
          <TbLayoutSidebarLeftExpand />
        )}
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavLink>
            <div>
              <span>
                <IoPersonCircleOutline size={"2rem"} />
              </span>
              <span className="ms-1">Super Admin</span>
            </div>
          </NavLink>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
