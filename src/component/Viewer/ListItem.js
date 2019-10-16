import React from "react";
import { MdAdd } from "react-icons/md";
import styled, { css } from "styled-components";

const ThumbNail = styled.div`
  background: black;
  justify-items: center;
  width: 120px;
  height: 67.5px;
`;

const StyledItem = styled.div`
  color: black;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  margin: 0.5rem;
  justify-items: center;
  padding: 1rem;
  .description {
    margin-left: auto;
    justify-content: space-between;
    .text {
      display: flex;
    }
  }
  &:hover {
    background: #eeeeee;
  }
  & + & {
    border-top: 1px solid black;
  }
`;
const ListItem = ({ todo, onClick, style }) => {
  const { id, text, descrpition } = todo;
  return (
    <div className="ListItem-virtualized" style={style}>
      <StyledItem>
        <ThumbNail />

        <div className="description">
          <div className="text" onClick={onClick}></div>
          <div>{descrpition}</div>
          <div>{text}</div>
        </div>
      </StyledItem>
    </div>
  );
};

export default React.memo(ListItem);
