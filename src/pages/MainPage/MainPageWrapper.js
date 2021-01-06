import styled from "styled-components";
import { colorChart, screen } from "~/Style";
const MainPageWrapper = styled.div`
  width: 100%;
`;
const BoxWithBackground = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? height : "600px")};
  background: ${colorChart.cream} no-repeat fixed center;
  background-size: cover;
  background-image: ${({ bgImage }) => (bgImage ? bgImage : "none")};
  display: flex;
  .text-box {
    margin: auto;
    padding: 30px;
    border: 3px solid white;
    font-size: 20px;
    font-weight: bold;
    background-color: #faf8f480;
  }
  @media screen and (max-width: ${screen.small}) {
    height: ${({ height }) => (height ? height : "100%")};
    .text-box {
      color: #131212;
      font-size: 9.2rem;
      font-weight: 500;
      text-transform: uppercase;
      line-height: 0.82;
      padding: 3px;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      width: 100%;
    }
  }
`;

export { MainPageWrapper, BoxWithBackground };
