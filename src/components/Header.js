import React from "react";
import "./Header.css";
import Logo from "../components/assets/logo.png";
import search from "../components/assets/search-outline.svg";

const Header = (props) => {
  return (
    <div className='header' onClick={props.onClick}>
      <img src={Logo} alt='...' />
      <div className='search__bar'>
        <button className='location'>Add location</button>
        <hr className='line' />
        <button className='guest'>Add guests</button>
        <hr className='line' />
        <img src={search} alt='...' className='search__icon' />
      </div>
    </div>
  );
};

export default Header;
