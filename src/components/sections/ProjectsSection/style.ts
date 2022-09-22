import styled from "styled-components";

export const StyledChildren = styled.div`
  width: 100%;
  margin-top: 100px;
  display: grid;
  gap: 50px 50px;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  flex: 1;
`;