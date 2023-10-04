import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styled from "styled-components";

const CustomTextarea = styled(TextareaAutosize)`
  background-color: #53585D;
  padding: 25px 12px;
  width: 60vw;
  margin: 18px 0;
  color: #d6d6d7;
  font-size: 17px;
  font-family: 'Source Sans 3', sans-serif;
  border-radius: 4px; // Cambia "radius" a "border-radius"

`;

const TextArea = ({ placeholder, label, value, onChange }) => {
    return (
        <CustomTextarea
            placeholder={placeholder}
            label={label}
            minRows={2}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextArea;
