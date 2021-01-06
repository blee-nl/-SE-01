import React from "react";
import StorePicture from "~/assets/images/bg1.jpg";
import { MainPageWrapper, BoxWithBackground } from "./MainPageWrapper";

const MainPage = () => (
  <MainPageWrapper>
    <BoxWithBackground bgImage={`url(${StorePicture})`}>
      <div className="text-box">Welcome !! I have been waiting for you :D</div>
    </BoxWithBackground>
  </MainPageWrapper>
);

export default MainPage;
