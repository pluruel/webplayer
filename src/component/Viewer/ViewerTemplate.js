import React from 'react';
import styled from 'styled-components';
import { Player } from 'video-react';

const w = e(window.innerWidth - 350);
const h = window.innerHeight;
function e(c) {
  const b = (c * 9) / 16;
  if (window.innerHeight - 100 < b) {
    return ((window.innerHeight - 200) * 16) / 9;
  } else {
    console.log(window.innerHeight);
    return c;
  }
}
const cal = e => {
  return (e / 16) * 9;
};

const Square = styled.div`
  background: black;
  height: calc(${w}px * (9 / 16));
  justify-content: center;
  margin: 1.5rem;
  width: ${w}px;
`;

const ViewerTemplate = () => {
  return <Square />;
};

export default ViewerTemplate;
