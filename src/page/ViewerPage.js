import React, { useReducer, useRef, useCallback } from "react";
import ListTemplate from "../component/Viewer/ListTemplate";
import ListPart from "../component/Viewer/ListPart";
import ViewerTemplate from "../component/Viewer/ViewerTemplate";
import styled from "styled-components";
import "./ViewerPage.scss";
function createLists() {
  const arr = [];
  for (let i = 1; i <= 5; ++i) {
    arr.push({
      id: i,
      text: `Step ${i}`,
      descrpition: `this is ${i}`
    });
  }
  return arr;
}

const PageDiv = styled.div`
  align-content: center;
  display: flex;
`;

const ViewerPage = () => {
  const lists = createLists();
  return (
    <>
      <PageDiv>
        <div>
          <ListTemplate>
            <ListPart lists={lists} />
          </ListTemplate>
        </div>
        <div className="ViewerTemplate">
          <ViewerTemplate />
        </div>
      </PageDiv>
    </>
  );
};

export default ViewerPage;
