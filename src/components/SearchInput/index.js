import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import { FaSearch, FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";
import SearchInputWrapper from "./SearchInputWrapper";
import Input from "./Input";
import SearchButton from "./SearchButton";

const SearchBox = ({
  handleSubmit,
  enableTopSearchesButton,
  showTopSearches,
  toggleShowTopSearches,
  setSearchWord,
  searchWord,
  onFocus
}) => {
  
  const [inputValue, setValue] = useState(searchWord || '') 

  const onChange = (e) => {
    const targetValue = e.target.value;
    setValue(targetValue)
    setSearchWord(targetValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const onClickSettingBtn = (e) => {
    e.preventDefault();
    toggleShowTopSearches();
  };

  const onClear = () => {
    setValue('');
    setSearchWord("");
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [inputValue]);

  const showRemoveBtn = inputValue &&inputValue.length > 0;
  const showDropdownBtn = enableTopSearchesButton && !showRemoveBtn;
  return (
    <SearchInputWrapper>
      <Input
        id="search-box"
        data-testid="search-box"  
        type="text"
        className="searchBox"
        placeholder="Search"
        value={inputValue}
        onChange={onChange}
        autoComplete="off"
        onFocus={()=>onFocus(searchWord)}
      />
      {showRemoveBtn && (
        <button className="remove-btn" data-testid="search-remove-btn" onClick={onClear}>
          <FaTimes />
        </button>
      )}
      {showDropdownBtn && (
        <button className="dropdown-btn" data-testid="dropdown-btn" onClick={onClickSettingBtn}>
          {showTopSearches ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      )}
      <SearchButton type="submit" onClick={onSubmit}>
        <FaSearch className="search-icon" />
      </SearchButton>
    </SearchInputWrapper>
  );
};

SearchBox.defaultProps = {
  enableTopSearchesButton: false,
  showTopSearches: false,
  searchWord:"",
  onFocus:()=>{}
};

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  enableTopSearchesButton: PropTypes.bool,
  showTopSearches: PropTypes.bool,
  toggleShowTopSearches: PropTypes.func,
  setSearchWord: PropTypes.func.isRequired,
  searchWord: PropTypes.string.isRequired,
  onFocus:PropTypes.func.isRequired, 
};

export default SearchBox;
