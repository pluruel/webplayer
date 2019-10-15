import React, { useCallback } from "react";
import styled from "styled-components";
// import "./ListPart.scss";
import { List } from "react-virtualized";
import ListItem from "./ListItem";

const ListPart = ({ lists }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = lists[index];
      return <ListItem todo={todo} key={key} style={style} />;
    },
    [lists]
  );

  const Lists = styled.div`
    margin: 0.5rem;
  `;

  return (
    <Lists>
      <List
        className="List"
        width={250}
        height={600}
        rowCount={lists.length}
        rowHeight={100}
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
