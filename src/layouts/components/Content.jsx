import { Container } from "reactstrap";
import React from "react";
import Topbar from "./Topbar";
import classNames from "classnames";

export default function Content({ sidebarIsOpen, toggleSidebar, children }) {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Topbar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />

      <Container fluid className="p-1">
        {children}
      </Container>
    </Container>
  );
}
