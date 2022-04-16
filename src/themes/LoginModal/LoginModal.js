import React from "react";
import { Modal } from "react-bootstrap";

const LoginModal = ({ Logo,showLogin,handleHideLogin }) => {
  return (
    <Modal className="modal my-4" show={showLogin} onHide={handleHideLogin}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-body-content d-flex flex-column align-items-center justify-content-center">
          <div className="login-splash d-flex flex-column align-items-center justify-content-center">
            <img src={Logo} alt="logo" />
            <h3 className="my-3">Welcome Back</h3>
            <button className="fb-login-btn my-2">
              <i>icon</i>
              <span>Login with Facebook</span>
            </button>
          </div>
          <div className="login-divider-content w-100 my-4 d-flex align-items-center">
            <div className="login-divider"></div>
            <span className="mx-3">or</span>
            <div className="login-divider"></div>
          </div>
          <form className="form mb-5 d-flex flex-column align-items-center justify-content-center">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Email or Username"
            />
            <input
              type="password"
              class="form-control form-control-lg my-4"
              placeholder="Password"
            />
            <div className="remember d-flex align-items-center justify-content-between">
              <label>
                <input
                  type="checkbox"
                  name="fruit[]"
                  value="bananas"
                  className="mx-2"
                />
                <span>Remember me</span>
              </label>
              <div className="forgot-pass">
                <span>Forgot Password?</span>
              </div>
            </div>
            <button type="button" class="my-4 w-100 fs-5 btn btn-primary">
              LOG IN
            </button>
          </form>
          <div className="login-footer-divider mb-3"></div>
          <div className="signup-link">
            <span>Don't have an account?</span>
           <span>Sign Up</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
