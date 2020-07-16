import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <ErrorPageWrapper>
      <h1>404</h1>
      <h3>sorry, the page you tried cannot be found!</h3>
      <Link to="/" className = "btn">
          BACK HOME
      </Link>
    </ErrorPageWrapper>
  );
};

const ErrorPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f1f1f1;
  text-align:center;
  h1 {
    font-size: 10rem;
    margin: 0;
    animation: breath 3s infinite;
    color:rgb(49, 61, 102);
  }
  h3 {
    text-transform: capitalize;
  }

  @keyframes breath {
    from {
      opacity: 0;
      transform: scale(1);
    }

    to {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;
export default Error;
