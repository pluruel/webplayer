import React from 'react';
import styled from 'styled-components';
const Lists = styled.div`
  border-radius: 4px;
  justify-content: left;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  overflow: hidden;

  .content {
    background: white;
  }
`;
const ListTemplate = ({ children }) => {
  return (
    <Lists>
      <div className="content">{children}</div>
    </Lists>
  );
};

export default ListTemplate;
