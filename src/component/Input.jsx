import React from "react";
import styled from "styled-components";

// Need to write component code for StyledInput using styled component by replacing `null` value
export const StyledInput = styled.input`
  padding: 25px;
  font-size: 1.5rem;
  border: 0px;
  border-radius: 20px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  background: #f0f0f0;
  width: 900px;
`;

const Input = ({ type, placeholder, onSubmit, children }) => {
  return (
    <StyledInput onSubmit={onSubmit} placeholder={placeholder} type={type} />
  );
};

export default Input;
