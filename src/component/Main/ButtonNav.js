import React from "react";
import Button from "./Buttons";
import styled from "styled-components";
const Nav = styled.nav`
  margin-left: 8rem;
  display: inline-flex;
`;

const ButtonNav = ({ items }) => {
  return (
    <Nav>
      {items.map(item => (
        <Button item={item} key={item.id} />
      ))}
    </Nav>
  );
};

export default ButtonNav;
