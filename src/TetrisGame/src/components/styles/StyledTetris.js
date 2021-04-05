import styled from "styled-components";
import background from "../../image/tetrisBackground.jpg";

export const StyledTetrisWrapper = styled.div`
  width: 50vw;
  height: 67vh;
  align-items: top;
  justify-content: top;

  background-size: fit;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  max-weigth: 900px;
  overflow: hidden;

  aside {
    align-self: start;
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
