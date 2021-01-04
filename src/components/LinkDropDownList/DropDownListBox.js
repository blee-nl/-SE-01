import styled from "styled-components";

const ClickableDropDownListBox = styled.div`
  &.overlay {
    position: absolute;
    top: 40px;
    left: 0;
  }
  width: 350px;
  z-index: 100;
  max-height: 0;
  background-color: white;
  border: none;
  transition: max-height 0.9s ease-in-out;
  ul {
    border: 0;
  }
  &.show {
    font-size: 0.8em;
    letter-spacing: 0;
    line-height: 1.8rem;
    max-height: fit-content;
    box-shadow: 0 2px 3px 0 rgba(0, 40, 43, 0.07);
    .title {
      text-transform: uppercase;
      background: #f8f8f8;
      margin: 0;
      padding: 16px 20px;
      position: relative;
      border: 1px solid #e4e7e8;
      border-bottom: 0;
      padding: 8px 20px 7px;
      font-weight: 600;
    }
    ul {
      background-color: white;
      border: 1px solid #e4e7e8;
      border-radius: 0 0 4px 4px;
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        cursor: pointer;
        text-transform: none;
        position: relative;
        height: auto;
        display: block;
        a {
          text-decoration: none;
          padding: 8px 20px 7px;
          display: inline-block;
          width: 100%;
          color: #565656;
          box-sizing: border-box;
          &:hover,
          &:focus {
            outline: none;
            color: #242424;
            font-weight: 500;
            cursor: pointer;
            background-color: #f9fafb;
          }
        }
      }
    }
  }
`;
export default ClickableDropDownListBox;
