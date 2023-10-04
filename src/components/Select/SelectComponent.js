import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const selectFieldStyles = {
  backgroundColor: "#53585D",
  padding: "7px 0",
  width: "61vw",
  margin: "5px 0",
  color: "#d6d6d7",
};

const SelectComponent = ({ label, children, value, onChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div>
      <Select sx={selectFieldStyles} value={value} onChange={handleChange}
      >
        
        <MenuItem value="" disabled>
          Selecciona una categoría
        </MenuItem>
        {children}
      </Select>
    </div>
  );
};

export default SelectComponent;
