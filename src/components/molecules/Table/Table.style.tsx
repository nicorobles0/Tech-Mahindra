import styled, { css } from "styled-components";

type props = {
  width?: string;
};

export const TableList = styled.table`
  margin-top: 100px;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  border-spacing: 0 15px;
`;
export const TableHead = styled.thead``;
export const TableBody = styled.tbody``;

export const TableTr = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd !important;
  padding: 0.35em;
  margin-bottom: 10px;
`;



