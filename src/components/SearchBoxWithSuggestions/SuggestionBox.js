import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import LinkDropDownList from "~/components/LinkDropDownList";

const SuggestionBoxWrapper = styled.div`
  margin: 0;
  position: absolute;
  background: #fff;
  bottom: auto;
  top: 40px;
  max-height: 0;
  width: 100%;
  .show {
    max-height: 299px;
    overflow-y: auto;
  }
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  .list-wrapper {
    position: relative;
  }
`;

const suggestionListKeys = ["items", "brands", "categories"];

// find letter and give style
function highlightLetter(words, targetLetter) {
  const reg = new RegExp(targetLetter, "gi");
  if (!reg) {
    return;
  }
  return words.replace(
    reg,
    `<span class="highlight-letters">${targetLetter}</span>`
  );
}

// name + ({quantity})
const SuggestionBox = ({ suggestionList, isShow, searchWord }) => {
  const getDisplayLabel = ({ name, quantity }) => {
    return (
      <>
        {ReactHtmlParser(highlightLetter(name.toLowerCase(), searchWord))}{" "}
        {quantity ? `(${quantity})` : ""}
      </>
    );
  };
  return (
    <SuggestionBoxWrapper>
      <div className="list-wrapper">
        {suggestionList &&
          suggestionListKeys.map((suggestionKey) => {
            return (
              <LinkDropDownList
                key={suggestionKey}
                isShow={isShow}
                items={suggestionList[suggestionKey]}
                title={suggestionKey}
                getDisplayLabel={getDisplayLabel}
              />
            );
          })}
      </div>
    </SuggestionBoxWrapper>
  );
};
export default SuggestionBox;
