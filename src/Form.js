import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

// ==================================================

export default function Form() {
  // ---------------------------------------------

  const [input, setInput] = useState({
    first: "",
    last: "",
    email: "",
  });

  // ---------------------------------------------

  const handler = (key) => (e) => {
    const { value } = e.target;
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  // ---------------------------------------------

  useEffect(() => {
    console.log("input: ", input);
  }, [input]);

  // ---------------------------------------------

  return (
    <form noValidate autoComplete="off" style={{ marginBottom: "2rem" }}>
      <TextField
        sx={{ mr: 4 }}
        label="First Name"
        value={input.first}
        onChange={handler("first")}
      />
      <TextField
        sx={{ mr: 4 }}
        label="Last Name"
        value={input.last}
        onChange={handler("last")}
      />
      <TextField
        label="Email"
        value={input.email}
        onChange={handler("email")}
      />
    </form>
  );
}
