import { Collapse, NavItem, NavLink } from "reactstrap";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import classNames from "classnames";
import useWindowSize from "../../hooks/useWindowSize";

export default function Menu({ icon: Icon, title, items, target, toggleMenu }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => setCollapsed(!collapsed);

  const windowSize = useWindowSize();

  const MenuNavLink = () => {
    const className = classNames({
      active: window.location.pathname === target,
      "dropdown-toggle": items.length > 0,
      close: !collapsed,
      open: collapsed,
    });

    const renderNav = (
      <>
        <Icon className="me-2" />
        {title}
      </>
    );

    if (items.length > 0) {
      return <NavLink className={className}>{renderNav}</NavLink>;
    }

    return (
      <NavLink tag={Link} to={target} className={className}>
        {renderNav}
      </NavLink>
    );
  };

  return (
    <div>
      <NavItem
        onClick={toggle}
        className={classNames({ "menu-open": !collapsed && items.length > 0 })}
      >
        <MenuNavLink />
      </NavItem>
      {items.length > 0 && (
        <Collapse
          isOpen={!collapsed}
          navbar
          className={classNames("items-menu", { "mb-1": !collapsed })}
        >
          {items.map(({ title, target, icon: Icon }, index) => {
            return (
              <NavItem key={index} className="pl-4">
                <NavLink
                  className={classNames({
                    active: window.location.pathname === target,
                  })}
                  tag={Link}
                  to={target}
                  onClick={() => windowSize.width <= 500 && toggleMenu(true)}
                >
                  <Icon className="me-2" />
                  {title}
                </NavLink>
              </NavItem>
            );
          })}
        </Collapse>
      )}
    </div>
  );
}
