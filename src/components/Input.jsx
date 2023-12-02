import { useState, useEffect } from "react";
import Textarea from "./TextArea";

const Input = ({ text }) => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue("");
  }, [text]);

  return (
    <Textarea
      value={value}
      handleChange={handleChange}
      className="sentence-input"
      initialHeight={200}
    />
  );
};

export default Input;
