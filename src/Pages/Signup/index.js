import React from "react";
import Signup from "../../System/User/Signup";
import styled from "styled-components";

const SignupContainer = () => {
  return (
    <Wrap>
      <Signup />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SignupContainer;
