import React from "react";
import styled from "styled-components";
import LinkDropDownList from "~/components/LinkDropDownList";

const SuggestionBoxWrapper = styled.div`
  margin: 0;
  position: absolute;
  background: #fff;
  bottom: auto;
  top: 40px;
  max-height: 0;
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
function highlightLetter(targetElement, words, targetLetter) {
  const reg = new RegExp(targetLetter, "gi");
  if (!reg || !targetElement) {
    return;
  }
  targetElement.innerHTML = words;
  targetElement.innerHTML = words.replace(
    reg,
    `<strong>${targetLetter}</strong>`
  );

  return;
}

//  <span id={`highlight-word-${name}`}  dangerouslySetInnerHTML={{__html: name.replace(reg,`<strong>${searchWord}</strong>`)}}></span>
// name + ({quantity})
const SuggestionBox = ({ suggestionList, isShow, searchWord }) => {
  const getDisplayLabel = ({ name, quantity }) => {
    const targetElement = document.getElementById(`highlight-word-${name}`);
    highlightLetter(targetElement, name, searchWord);
    const reg = new RegExp(searchWord, "gi");
    return (
      <>
        <span id={`highlight-word-${name}`}>{name}</span>
        {quantity ? `(${quantity})` : ""}{" "}
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

