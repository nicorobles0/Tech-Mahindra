import styled, { css } from "styled-components";

type props = {
  isActive: boolean;
};

export const MenuNav = styled.nav`
  margin-left: 40px;
  padding: 25px 0;
  box-sizing: border-box;
`;

export const MenuLi = styled.li<props>`
  list-style: none;
  padding: 16px 19px;
  margin-right: 10px;
  border-radius: 60px 0 0 60px;
  width: 110%;
  margin-left: -15px;
  ${({ isActive }) => css`
    ${isActive &&
    css`
      background: var(--white);
      border-radius: 27px;
      position: relative;
      & > a {
        color: var(--color-primary) !important;
      }
      &::before {
        content: "";
        position: absolute;
        top: -80px;
        right: 0px;
        height: 80px;
        width: 62px;
        border-bottom-right-radius: 80px;
        box-shadow: 0 40px 0 0 var(--white);
        transform: rotateZ(360deg);
      }
      &::after {
        content: "";
        position: absolute;
        top: 51px;
        right: 0px;
        height: 80px;
        width: 62px;
        border-top-right-radius: 80px;
        box-shadow: 0 -40px 0 0 var(--white);
        transform: rotateZ(360deg);
      }
    `}
  `}
`;
