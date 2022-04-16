import React from "react";
import Logo from "../../assets/imgs/Logo.svg";

const Header = () => {
  return (
    <header className="w-100 d-flex align-items-center justify-content-between px-2 py-1">
      <div className="logo">
        <img src={Logo} alt="freelancer" />
      </div>
      <nav className="navbar">
        <button className="modal-btns">Log In</button>
        <button className="modal-btns">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
