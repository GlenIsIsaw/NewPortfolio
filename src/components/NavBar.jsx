import React from "react";
import Nav from "react-bootstrap/Nav";


const NavBar = () => {
  return (
    <Nav className="flex-column" variant="pills">
    {sections.map((section) => (
      <Nav.Item key={section.id}>
        <Nav.Link
          href={`#${section.id}`}
          className={section.id === activeSection ? 'active' : ''}
        >
          {section.title}
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
  );
};

export default NavBar;
