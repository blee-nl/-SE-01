import styled from "styled-components";
import { colorChart, screen } from "~/Style";

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 56px;
  @media screen and (max-width: ${screen.small}) {
    width: 48px;
  }
  background-color: ${colorChart.orange};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  .search-icon {
    margin-top: 4px;
  }
`;
export default SearchButton;
