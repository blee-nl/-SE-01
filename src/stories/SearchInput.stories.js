import React, { useState} from "react";
import SearchInput from "~/components/SearchInput";
import LinkDropDownList from "~/components/LinkDropDownList";
import { GlobalStyle } from "~/Style";
export default {
  title: "SearchInput",
  component: SearchInput,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export function MySearchInput() {

  const [searchWord, setSearchWord] = useState("");
  return (
    <>
      <GlobalStyle />
      <SearchInput
        handleSubmit={() => {
          console.log("clicked");
        }}
        setSearchWord={setSearchWord}
        searchWord={searchWord}
      />
    </>
  );
}

export function MySearchInputWithExtraButton() {

  const [searchWord, setSearchWord] = useState("");
  const [showTopSearches, setShowTopSearches] = useState(false);
  const toggleShowTopSearches = () =>
  setShowTopSearches((prevShowTopSearches) => !prevShowTopSearches);
  const mockItems = [
          {
            name: "Pure cashmere muffler",
            type: "search",
            link: "/shop/?search=pure+cashmere+muffler",
          },
          {
            name: "Adjustable desk",
            type: "/search",
            link: "/shop/?search=adjustable+desk",
          },
        ];
  return (
    <>
      <GlobalStyle />
      <SearchInput
        handleSubmit={() => {
          console.log("clicked");
        }}
        enableTopSearchesButton
        showTopSearches={showTopSearches}
        toggleShowTopSearches={toggleShowTopSearches}
        setSearchWord={setSearchWord}
        searchWord={searchWord}
      />
      <LinkDropDownList
        isShow={showTopSearches}
        items={mockItems}
      />
    </>
  );
}


export function MySearchInputWithSuggestion() {

  const [searchWord, setSearchWord] = useState("");
  const [searchSuggestions, setSearchSuggestion] = useState(false);
  const mockItems = [
          {
            name: "Pure cashmere muffler",
            type: "search",
            link: "/shop/?search=pure+cashmere+muffler",
          },
          {
            name: "Adjustable desk",
            type: "/search",
            link: "/shop/?search=adjustable+desk",
          },
        ];

  const handleChange = (searchWord) => {
    setSearchWord(searchWord);
    if (searchWord.length > 1) {
      setSearchSuggestion(mockItems);
    } else {
      setSearchSuggestion(null);
    }
  };
  

  return (
    <>
      <GlobalStyle />
      <SearchInput
        handleSubmit={() => {
          console.log("clicked");
        }}
        setSearchWord={handleChange}
        searchWord={searchWord}
      />
      <LinkDropDownList
        isShow={searchSuggestions}
        items={mockItems}
      />
    </>
  );
}