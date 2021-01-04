import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  max-width: 1080px;
  padding: 0 10px;
  flex-wrap: wrap;
  a {
    img.logo {
      max-width: 240px;
    }
  }
`;
export default HeaderWrapper;
