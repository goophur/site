import React, { Component, Fragment } from "react";
import Download from "../components/Download";

import "../styles/about.css";
import LoginComp from "../components/auth/LoginComp";
import RegisterComp from "../components/auth/RegisterComp";
import Logo from "../components/Logo";
import { Consumer } from "../context";

class About extends Component {
  state = {
    isRegistering: true
  };

  onClickLogin() {
    this.setState({
      isRegistering: false
    });
  }

  onClickRegister() {
    this.setState({
      isRegistering: true
    });
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { isAuthenticated } = value;
          return (
            <div>
              {!isAuthenticated && (
                <nav className="nav-container">
                  <button onClick={() => this.onClickLogin()}>sign in</button>
                  <button onClick={() => this.onClickRegister()}>
                    sign up
                  </button>
                  <Logo />
                </nav>
              )}
              <div>
                <img
                  className="logo-lockup-site"
                  src={require("./../assets/goophur-lockup-site.png")}
                  alt="logo lockup"
                />
              </div>
              <div className="about-text-site-container">
                <div className="about-text-site">
                  <header className="about-title-site">what's goophur?</header>
                  <p>
                    goophur makes it easy & fun for anyone to use the powerful
                    filter tools offered by Google search.
                    <br />
                    <br />
                    just sign up to the right, then install the extension here
                    to get searching!
                  </p>
                  <Download />
                </div>
                {!isAuthenticated && (
                  <div className="login-container">
                    {!this.state.isRegistering ? (
                      <Fragment>
                        <LoginComp />
                        <p className='form-footer-text'>
                          need an account?{" "}
                          <button onClick={() => this.onClickRegister()}>
                            {" "}
                            sign up{" "}
                          </button>
                        </p>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <RegisterComp />
                        <p className='form-footer-text'>
                          Already have an account?{" "}
                          <button onClick={() => this.onClickLogin()}>
                            {" "}
                            sign in{" "}
                          </button>
                        </p>
                      </Fragment>
                    )}
                  </div>
                )}
                {/* <Download /> */}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default About;
