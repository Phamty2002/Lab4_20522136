import React, { useState } from "react";
import "@mui/material/styles";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

export default function App() {
  const [value, setValue] = useState("first");

  return (
    <FormGroup style={{ width: 200, margin: 10 }}>
      <MyTextInput />
      <FormControl>
        <InputLabel htmlFor="my-select">My Select</InputLabel>
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          inputProps={{ name: "my-select" }}
        >
          <MenuItem value="first">First</MenuItem>
          <MenuItem value="second">Second</MenuItem>
          <MenuItem value="third">Third</MenuItem>
        </Select>
      </FormControl>
    </FormGroup>
  );
}

export default function MyTextInput() {
  const [value, setValue] = useState("");

  return (
    <TextField
      label="Name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      margin="normal"
    />
  );
}
