import React from "react";
import styled from "styled-components";

// Establece propiedades de estilo basadas en las props.
const EstilosButtonHeader = styled.button`
    width: 180.13px;
    height: 54px;
    background-color: ${(props) => props.backgroundColor || "#000000"};
    color: ${(props) => props.color || "white"};
    border-radius: 4px;
    border-color: ${(props) => props.borderColor || "#F5F5F5"};
    font-size: 1.25rem;
`

const Button = ({ nombre, backgroundColor, color, borderColor }) => {
    return (
        <EstilosButtonHeader
            backgroundColor={backgroundColor}
            color={color}
            borderColor={borderColor}
        >
            {nombre}
        </EstilosButtonHeader>
    );
}

export default Button;
