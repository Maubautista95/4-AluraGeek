import React from "react";
import styled from "styled-components";

// Establece propiedades de estilo basadas en las props.
const EstilosButtonHeader = styled.button`
    width: 180.13px;
    height: 54px;
    background: ${(props) => props.background_color || "#000000"};
    color: ${(props) => props.color || "white"};
    border-radius: 4px;
    border-color: ${(props) => props.border_color || "#F5F5F5"};    
    border-size: 1px;
    font-size: 1.25rem;
    transition: 0.85s;

    &&:hover{
        background: rgb(37,125,233);
        background: radial-gradient(circle, rgba(37,125,233,1) 0%, rgba(2,0,36,1) 96%, rgba(37,125,233,1) 100%); 
        
    }

`
 
const Button = ({ nombre, background_color, color, border_color, type }) => {
    console.log(type)
    return (
        <EstilosButtonHeader
            background_color={background_color}
            color={color}
            border_color={border_color}
            type={type}
        >
            {nombre}
        </EstilosButtonHeader>
    );
}

export default Button;
