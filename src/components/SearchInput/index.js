import React, { useEffect } from "react";
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
}) => {
  const onChange = (e) => {
    setSearchWord(e.target.value);
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
  }, [searchWord]);

  const showRemoveBtn = searchWord &&searchWord.length > 0;
  const showDropdownBtn = enableTopSearchesButton && !showRemoveBtn;
  return (
    <SearchInputWrapper>
      <Input
        id="search-box"
        type="text"
        className="searchBox"
        placeholder="Search"
        value={searchWord}
        onChange={onChange}
        autoComplete="off"
      />
      {showRemoveBtn && (
        <button className="remove-btn" onClick={onClear}>
          <FaTimes />
        </button>
      )}
      {showDropdownBtn && (
        <button className="dropdown-btn" onClick={onClickSettingBtn}>
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
  searchWord:""
};

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  enableTopSearchesButton: PropTypes.bool,
  showTopSearches: PropTypes.bool,
  toggleShowTopSearches: PropTypes.func,
  setSearchWord: PropTypes.func.isRequired,
  searchWord: PropTypes.string.isRequired,
};

export default SearchBox;
