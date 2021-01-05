import React from "react";
import { Link } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import LinkDropDownList from "~/components/LinkDropDownList";
import { GlobalStyle } from "~/Style";
export default {
  title: "LinkDropDownList",
  component: LinkDropDownList,
};

export function LinkDropDownListWithTitle() {
  return (
    <>
      <GlobalStyle />
      <LinkDropDownList
        isShow
        title="brands"
        items={[
          {
            id: 1568,
            name: "Gantrui",
            quantity: 350,
          },
          {
            id: 1023,
            name: "Dailturi",
            quantity: 350,
          },
          {
            id: 1036,
            name: "Tinturilly",
            quantity: 350,
          },
        ]}
      />
    </>
  );
}

export function LinkDropDownListWithoutTitle() {
  return (
    <>
      <GlobalStyle />
      <LinkDropDownList
        isShow
        items={[
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
        ]}
      />
    </>
  );
}
