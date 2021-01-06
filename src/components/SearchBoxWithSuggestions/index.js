import React, { useState, useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
// api functions
import { getSearchSuggestions, getMostSearchedWords } from "~/services/services";
import SearchInput from "~/components/SearchInput";
import LinkDropDownList from "~/components/LinkDropDownList";
import SearchBoxWrapper from "./SearchBoxWrapper";
import SuggestionBox from "./SuggestionBox";

const SearchBoxWithSuggestions = () => {
  // put in reducer for api error & loading.
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // component ref; it will use for closing any dropdown
  // when user clicks outside component
  // separate below to new file.
  const searchComponentWrapper = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e) => {
    const { current } = searchComponentWrapper;
    if (current && !current.contains(e.target)) {
      setShowTopSearches(false);
      setSearchSuggestion(null);
    }
  };

  const location = useLocation();
  useEffect(() => {
    setShowTopSearches(false);
    setSearchSuggestion(null);
   setSearchWord("");
  }, [location]);

  //searchWord
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    handleChange(searchWord);
  }, [searchWord]);

  // extra behaviour for showing top search words
  const [topSearchWords, setTopSearchWords] = useState([]);
  const [showTopSearches, setShowTopSearches] = useState(false);

  const toggleShowTopSearches = () =>
    setShowTopSearches((prevShowTopSearches) => !prevShowTopSearches);

  const getTopSearches = async () => {
    try {
      const { data } = await getMostSearchedWords();
      setTopSearchWords(data.mostSearchedWord);
    } catch (error) {
      console.log("Error: ", error.message);
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (showTopSearches) {
      setLoading(true);
      getTopSearches();
    } else {
      setTopSearchWords([]);
    }
  }, [showTopSearches]);

  // this is assessment for search suggestion list
  const [searchSuggestions, setSearchSuggestion] = useState();

  const getSuggestions = async (searchWord) => {
    try {
      // Currently canned api is only has topsearch and seach variabout tr, tru, trui. 
      const { data } = await getSearchSuggestions(searchWord); 
      setSearchSuggestion(data.results);
    } catch (error) {
      console.log("Error: ", error.message);
      setLoading(false);
      setErrorMessage(error.message);
    }
  };
  // search
  const history = useHistory();
  const handleSubmit = () => {
    history.push({
      pathname: "shop",
      search: searchWord.replace(/\s+/g, "+") ,
    });
  };

  const handleChange = (searchWord) => {
    showTopSearches && setShowTopSearches(false);
    if (searchWord.length > 1) {
      getSuggestions(searchWord);
    } else {
      setSearchSuggestion(null);
    }
  };

  return (
    <SearchBoxWrapper ref={searchComponentWrapper}>
      <SearchInput
        handleSubmit={handleSubmit}
        searchWord={searchWord}
        showTopSearches={showTopSearches}
        enableTopSearchesButton
        toggleShowTopSearches={toggleShowTopSearches}
        setSearchWord={setSearchWord}
        onFocus={handleChange}
      />
      <LinkDropDownList
        isOverlay
        isShow={showTopSearches}
        title="Most Searched"
        items={topSearchWords}
      />
      <SuggestionBox
        isShow={searchSuggestions ? true : false}
        suggestionList={searchSuggestions}
        searchWord={searchWord}
      />
    </SearchBoxWrapper>
  );
};

export default SearchBoxWithSuggestions;
