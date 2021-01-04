import styled from 'styled-components';

const SearchButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 56px;
    background-color: #fda727;
    border:none;
    cursor: pointer;
    &:focus{
      outline: none;
    }
    .search-icon{
        margin-top:4px;
    }
`;
export default SearchButton;
