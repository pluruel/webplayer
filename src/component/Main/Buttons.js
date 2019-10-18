import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Btn = styled.button`
  background: #000000;
  border-radius: 5px;
  color: #ffffff;
  height: 5rem;
  width: 10rem;
  display: block;
  font-size: 1.5rem;
  outline: none;
  border: none;
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background: #adb5bd;
  }
`;

const linkStyle = {
  textDecoration: "none"
};

const MainBtn = ({ item }) => {
  const { url, name } = item;
  return (
    <Link to={url} style={linkStyle}>
      <Btn>{name}</Btn>
    </Link>
  );
};

export default MainBtn;
