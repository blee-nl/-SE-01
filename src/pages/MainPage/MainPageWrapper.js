import styled from "styled-components";

const MainPageWrapper = styled.div`
  width: 100%;
`;
const BoxWithBackground = styled.div`
  width: 100%;
  height: ${({height}) => (height ? height : "600px")};
  background: #faf7f3 no-repeat fixed center;
  background-size: cover;
  background-image: ${({bgImage}) => (bgImage ? bgImage : "none")};
  display:flex;
  .text-box{
      margin:auto;
      padding:30px;
      border: 3px solid white;
      font-size: 20px;
      font-weight: bold;
      background-color: #faf8f480;
  }
`;

export { MainPageWrapper, BoxWithBackground };
