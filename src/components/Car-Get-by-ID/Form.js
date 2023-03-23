import { useEffect } from "react";
import { TextField } from "@mui/material";

// ==================================================

export default function Form({ input, setInput }) {
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
        // sx={{ mr: 4 }}
        label="ID"
        value={input.id ? input.id : ""}
        onChange={handler("id")}
      />
    </form>
  );
}
