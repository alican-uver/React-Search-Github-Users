import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginPageWrapper>
      <div className="container">
        {/* images gets from inatlantis.com */}
        <img
          src="https://www.inatlantis.com/images/login.png"
          alt="github user"
        />
        <h1>github user</h1>
        <a href=" " className="btn">
          Login
        </a>
      </div>
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f1f1f1;
  .container {
    width: 100%;
    max-width: 300px;
    text-align: center;
    h1 {
      font-size: 3rem;
      text-transform: capitalize;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default Login;
