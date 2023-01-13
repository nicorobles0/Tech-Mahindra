import styled, { css } from "styled-components";
  
export const AdminSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
`;

export const MenuContainer = styled.aside`
  display: flex;
  width: 25%;
  height: 100vh;
  background-color: var(--color-primary);
`;
export const ContentContainer = styled.div`
  width: 75%;
  height: 100vh;
`;