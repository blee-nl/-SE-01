import styled from "styled-components";
import { screen } from "~/Style";
const HeaderWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  flex-direction: row;
  max-width: ${screen.default};
  padding: 0 10px;
  flex-wrap: wrap;

  @media screen and (max-width: ${screen.small}) {
    flex-direction: column;

    &:nth-child(n) {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: ${screen.default}) {
    &:first-child {
      margin-left: 10;
    }
    &:last-child {
      margin-right: 10;
    }
    a {
      img.logo {
        padding: 10px 5px 5px;
      }
    }
  }

  a {
    img.logo {
      max-width: 240px;
    }
  }
`;
export default HeaderWrapper;
