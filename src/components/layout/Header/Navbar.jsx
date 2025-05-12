import React, { useState } from "react";
import { ArrowDown, ChevronDown, ChevronUp } from "react-feather";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavbarModule = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = () => setIsOpen(!isOpen);
  const handleMouseEnter = (index) => setOpenIndex(index);
  const handleMouseLeave = () => setOpenIndex(null);

  const navBarItems = [
    { label: "Shop", items: ["shop 1", "shop 2", "shop 3"] },
    { label: "Store", items: ["Team", "History", "Careers"] },
    { label: "New Collections", items: ["Web", "Mobile", "AI"] },
    { label: "Contact", items: ["Email", "Phone", "Social"] },
  ];

  return (
    <>
      <div className="">
        <Navbar className="navbar-expand-md" {...args}>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem className="me-2">
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              {navBarItems?.length > 0
                ? navBarItems.map((dropdown, index) => (
                    <UncontrolledDropdown
                      nav
                      inNavbar
                      className="me-2"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      isOpen={openIndex === index}
                      toggle={() => {}}
                    >
                      <DropdownToggle nav>
                        {dropdown.label}{" "}
                        {openIndex === index ? (
                          <ChevronUp size={17} style={{ marginLeft: "1px" }} />
                        ) : (
                          <ChevronDown
                            size={17}
                            style={{ marginLeft: "1px" }}
                          />
                        )}
                      </DropdownToggle>
                      <DropdownMenu right>
                        {dropdown.items.map((item, i) => (
                          <DropdownItem key={i}>{item}</DropdownItem>
                        ))}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ))
                : ""}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarModule;
