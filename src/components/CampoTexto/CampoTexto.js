import React from "react";
import TextField from "@mui/material/TextField";

const CampoTexto = ({ label, placeholder, onChange, value }) => {
  
  const textFieldStyles = {
    backgroundColor: "#53585D",
    padding: "7px 12px",
    width: "60vw",
    margin: "10px 0",
  };

  const inputTextStyles = {
    color: "#c2c2c2", // Cambia "red" al color que desees
  };

  const labelStyles = {
    color: "#c2c2c2",
    padding: "12px",
  }

  return (
    <TextField
      label={placeholder}
      sx={textFieldStyles}
      variant="standard"
      onChange={onChange}
      value={value}
      InputProps={{ style: inputTextStyles }}
      InputLabelProps={{ style: labelStyles }}
    />
  );
};

export default CampoTexto;
