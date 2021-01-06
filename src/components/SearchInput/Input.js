import styled from "styled-components";
import { colorChart, screen } from "~/Style";

const Input = styled.input`
  height: 24px;
  padding: 17px 15px;
  margin: 2px;
  background-color: white;
  font-size: 14px;
  line-height: 24px;
  color: black;
  ::placeholder {
    color: ${colorChart.placeholderText};
  }
  font-weight: 400;
  outline: 0;
  border: none;
  width: 264px;
  @media screen and (max-width: ${screen.small}) {
    width: calc(100% - 77px);
  }
`;
export default Input;
