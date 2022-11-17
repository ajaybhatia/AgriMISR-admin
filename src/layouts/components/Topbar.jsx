import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
} from "reactstrap";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";
import React, { useState } from "react";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";

import useUserStore from "../../store/useUserStore";

export default function Topbar({ sidebarIsOpen, toggleSidebar }) {
  const { user, resetUser } = useUserStore();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar className="navbar shadow-sm bg-white rounded" expand="md">
      <Button className="btn-menu-toggle" onClick={toggleSidebar}>
        {sidebarIsOpen ? (
          <TbLayoutSidebarLeftCollapse />
        ) : (
          <TbLayoutSidebarLeftExpand />
        )}
      </Button>
      <Nav className="ms-auto" navbar>
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggleDropdown}
          direction="down"
        >
          <div className="d-flex align-items-center">
            <IoPersonCircleOutline size={"2rem"} />
            <DropdownToggle tag="span" className="cursor role" caret>
              {user.email}
            </DropdownToggle>
          </div>
          <DropdownMenu className="cursor">
            <DropdownItem onClick={resetUser}>
              <IoLogOutOutline className="me-1" />
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}
