import React from "react";
import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo.png";
import HeaderWrapper from "./HeaderWrapper";

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <img className="logo" src={Logo} alt="logo" />{" "}
    </Link>
  </HeaderWrapper>
);
export default Header;
