import React from "react";
import { action } from "@storybook/addon-actions";
import { GlobalStyle } from "~/Style";
import Header from "~/components/Header";

export default {
  title: "Header",
  component: Header,
};

export function SimpleHeader() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}
