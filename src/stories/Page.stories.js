import React from "react";
import MainPage from "~/pages/MainPage";
import {GlobalStyle} from "~/Style";
export default {
  title: "Mainpage",
  component: MainPage,
};

export function myMainPage() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
}
