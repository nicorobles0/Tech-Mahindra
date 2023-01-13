import styled, { css } from "styled-components";

type props = {
  width?: string;
};

export const TableTh = styled.th.attrs(({ scope }) => ({
    scope: "col",
  }))<props>`
    ${({ width }) => css`
    width: ${width};
    padding: 1.5em;
    text-align: left;
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    `}
  `;