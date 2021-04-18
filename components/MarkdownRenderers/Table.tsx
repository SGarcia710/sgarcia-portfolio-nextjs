import React from 'react';
import styled from 'styled-components';

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 2rem;
`;
export const Table = ({ children }) => (
  <TableWrapper>
    <table>{children}</table>
  </TableWrapper>
);

export default Table;
