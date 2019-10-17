import React, { useCallback } from "react";
import styled from "styled-components";
// import "./ListPart.scss";
import { List } from "react-virtualized";
import ListItem from "./ListItem";

const ListPart = ({ lists, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const movie = lists[index];
      return (
        <ListItem movie={movie} key={key} style={style} onToggle={onToggle} />
      );
    },
    [lists, onToggle]
  );

  const Lists = styled.div`
    margin: 0.5rem;
  `;

  return (
    <Lists>
      <List
        className="List"
        width={267}
        height={600}
        rowCount={lists.length}
        rowHeight={120}
        rowRenderer={rowRenderer}
        list={lists}
        style={{
          justifyItems: "center",
          outline: "none"
        }}
      />
    </Lists>
  );
};

export default ListPart;
