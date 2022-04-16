import React,{useState} from "react";

import LoginModal from "../../themes/LoginModal/LoginModal";
import SignupModal from "../../themes/SignupModal/SignupModal";

import Logo from "../../assets/imgs/Logo.svg";

const Header = () => {

  const [showLogin,setShowLogin] = useState(false)
  const [showSignup,setShowSignup] = useState(false)


  const handleShowLogin = () =>{
    setShowLogin(true)
  }
  const handleShowSignup = () =>{
    setShowSignup(true)
  }

  const handleHideLogin = () =>{
    setShowLogin(false)
  }

  const handleHideSignup = () =>{
    setShowSignup(false)
  }
  return (
    <>
      <LoginModal Logo={Logo} showLogin={showLogin} handleHideLogin={handleHideLogin}/>
      <SignupModal Logo={Logo} showSignup={showSignup} handleHideSignup={handleHideSignup}/>
      <header className="w-100 d-flex align-items-center justify-content-between px-2 py-1">
        <div className="logo">
          <img src={Logo} alt="freelancer" />
        </div>
        <nav className="navbar">
          <button className="modal-btns" onClick={handleShowLogin}>Log In</button>
          <button className="modal-btns" onClick={handleShowSignup}>Sign Up</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
