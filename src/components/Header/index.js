import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "~/components/SearchBoxWithSuggestions";
import Logo from "~/assets/images/logo.png";
import HeaderWrapper from "./HeaderWrapper";

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <img className="logo" src={Logo} alt="logo" />
    </Link>
    <SearchBox />
  </HeaderWrapper>
);
export default Header;
