import React from 'react';
import styled from 'styled-components';

// Need to write component code for ChipWrapper using styled component by replacing `null` value
export const ChipWrapper = styled.button`
display: inline-block;
    padding: 20px;
    font-size: 1.7rem;
    margin: 0.5em;
    border-radius: 16px;
    background-color: ${props => props.isSelected ? '#272727' : '#252525'};
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #ddd;
    };
`;

const Chip = ({ onClick, isSelected, children }) => {
    return (
        <ChipWrapper onClick={onClick}>{children}</ChipWrapper>
    );
}

export default Chip;