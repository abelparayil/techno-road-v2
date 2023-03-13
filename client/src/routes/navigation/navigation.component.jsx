import React from "react";

import { Nav, Logo, Menu, MenuItem, MenuLink } from "./navigation.styles";

const Navigation = () => {
  return (
    <Nav>
      <Logo href="/">My Website</Logo>
      <Menu>
        <MenuItem>
          <MenuLink href="">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Contact</MenuLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navigation;
