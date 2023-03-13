import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0 1rem;
`;

export const MenuLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid white;
  }
`;
