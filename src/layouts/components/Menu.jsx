import { Collapse, NavItem, NavLink } from "reactstrap";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import classNames from "classnames";
import useWindowSize from "../../hooks/useWindowSize";

export default function Menu({ icon: Icon, title, items, target, toggleMenu }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => setCollapsed(!collapsed);

  const windowSize = useWindowSize();

  return (
    <div>
      <NavItem
        onClick={toggle}
        className={classNames({ "menu-open": !collapsed && items.length > 0 })}
      >
        <NavLink
          className={classNames({
            active: window.location.pathname === target,
            "dropdown-toggle": items.length > 0,
          })}
        >
          <Icon className="me-2" />
          {title}
        </NavLink>
      </NavItem>
      {items.length > 0 && (
        <Collapse
          isOpen={!collapsed}
          navbar
          className={classNames("items-menu", { "mb-1": !collapsed })}
        >
          {items.map((item, index) => (
            <NavItem key={index} className="pl-4">
              <NavLink
                tag={Link}
                to={item.target}
                onClick={() => windowSize.width <= 500 && toggleMenu(true)}
              >
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Collapse>
      )}
    </div>
  );
}
