import React, { useState, useCallback } from "react";
import ListTemplate from "../component/Viewer/ListTemplate";
import ListPart from "../component/Viewer/ListPart";
import ViewerTemplate from "../component/Viewer/ViewerTemplate";
import styled from "styled-components";
import "./ViewerPage.scss";
function createLists() {
  const arr = [
    {
      id: 1,
      text: `Sample 1`,
      descrpition: `mmmm`,
      url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
      id: 2,
      text: `Sample 2`,
      descrpition: `mmmm`,
      url: "https://media.w3.org/2010/05/sintel/trailer_hd2.mp4"
    }
  ];

  return arr;
}

const PageDiv = styled.div`
  align-content: center;
  display: flex;
`;

const ViewerPage = () => {
  const lists = createLists();
  const [movieURL, setmovieURL] = useState();

  const onToggle = useCallback(url => {
    console.log(url);
    setmovieURL(url);
  }, []);

  return (
    <>
      <PageDiv>
        <div>
          <ListTemplate>
            <ListPart lists={lists} onToggle={onToggle} />
          </ListTemplate>
        </div>
        <div className="ViewerTemplate">
          <ViewerTemplate movieURL={movieURL} />
        </div>
      </PageDiv>
    </>
  );
};

export default ViewerPage;
