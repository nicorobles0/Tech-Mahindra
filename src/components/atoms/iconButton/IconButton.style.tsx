import styled, { css } from "styled-components";

type props = {
  isAnimated: boolean;
  isRounded: boolean;
};

export const Button = styled.button<props>`
  border: none;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2 ease-out;
  padding: 5px;
  border-radius: 50%;
  & :hover {
    transform: scale(1.07);
  }
  ${({ isRounded }) => css`
    ${isRounded &&
    css`
      border: 1px solid gainsboro;
      box-sizing: border-box;
    `}
  `}
  ${({ isAnimated }) => css`
    ${isAnimated &&
    css`
      -webkit-animation-name: tada;
      animation-name: tada;
      -webkit-animation-duration: 5s;
      animation-duration: 5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
      @-webkit-keyframes tada {
        0% {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }
        10%,
        20% {
          -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
          transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
        }
        30%,
        50%,
        70%,
        90% {
          -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
          transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        }
      }
      @keyframes tada {
        0% {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }
        10%,
        20% {
          -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
          transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
        }
        30%,
        50%,
        70%,
        90% {
          -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
          transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        }
      }
    `}
  `}
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
`;