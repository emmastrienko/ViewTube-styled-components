import React from "react";
import styled from "styled-components";

// Need to write component code for StyledCard using styled component by replacing `null` value
export const StyledCard = styled.div`
  border-radius: 15px;
  padding: 15px;
  margin: 10px;
  width: 500px;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => (props.isSelected ? "#262626" : "#252525")};
`;

// Need to write component code for VideoImage using styled component by replacing `null` value
export const VideoImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

// Need to write component code for CardSubtitle using styled component by replacing `null` value
export const CardSubtitle = styled.h5`
  color: #fff;
  font-size: 2rem;
`;

// Need to write component code for CardTitle using styled component by replacing `null` value
export const CardTitle = styled.h4`
  color: #fff;
  font-size: 2.5rem;
`;

const Card = ({ onClick, isSelected, src, alt, title, subtitle, children }) => {
  return (
    <StyledCard onClick={onClick}>
      <VideoImage src={src} alt={alt} />
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      {children}
    </StyledCard>
  );
};

export default Card;
