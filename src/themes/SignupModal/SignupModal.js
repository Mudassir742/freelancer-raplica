import React from "react";
import { Modal } from "react-bootstrap";

const LoginModal = ({ Logo,showSignup,handleHideSignup}) => {
  return (
    <Modal className="modal my-4" show={showSignup} onHide={handleHideSignup}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-body-content d-flex flex-column align-items-center justify-content-center">
          <div className="login-splash d-flex flex-column align-items-center justify-content-center">
            <img src={Logo} alt="logo" />
            <h3 className="my-3">Welcome Back</h3>
            <button className="fb-login-btn my-2">
              <i>icon</i>
              <span>Continue with Facebook</span>
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
            <button type="button" class="my-4 w-100 fs-5 btn btn-primary">
              Join Freelancer
            </button>
            <div className="signup-aside">
              <small>
                By registering you confirm that you accept the{" "}
                <span>Terms & Conditions</span> and {" "}
                <span>Privacy Policies</span>
              </small>
            </div>
          </form>
          <div className="login-footer-divider mb-3"></div>
          <div className="signup-link">
            <span>Already have an account?</span>
            <span>Log In</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
