import Menu from "./Menu";
import { Nav } from "reactstrap";
import React from "react";
import adminSubmenus from "../../menus/adminSubMenu";
import classNames from "classnames";

export default function SideBar({ isOpen, toggle }) {
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
        <h3 className="text-center">FarmerApp</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          {adminSubmenus.map(({ title, icon, items, target }) => (
            <Menu
              key={title}
              toggleMenu={toggle}
              title={title}
              icon={icon}
              items={items}
              target={target}
            />
          ))}
        </Nav>
      </div>
    </div>
  );
}
