import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const selectFieldStyles = {
  backgroundColor: "#53585D",
  width: "80vw",
  margin: "5px 0",
  padding: "7px 12px",
  color: "#d6d6d7",
};

const estilosTexto ={
  color: "#d6d6d7",
}

const SelectComponent = ({ label, children, value, onChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  const placeholderValue = "Escoja una categoría";

  return (
    <div>
      <FormControl sx={selectFieldStyles}>
        <InputLabel sx={estilosTexto}>{placeholderValue}</InputLabel>
        <Select value={value} onChange={handleChange}  sx={estilosTexto} >
          <MenuItem disabled value="">
            {placeholderValue}
          </MenuItem>
          {children}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
