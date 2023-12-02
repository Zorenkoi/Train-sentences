import React, { useEffect, useState, useRef } from "react";

const Textarea = ({ value, handleChange, className, initialHeight }) => {
  const textareaRef = useRef(null);

  const [textareaHeight, setTextareaHeight] = useState(`${initialHeight}px`);

  const handleTextChange = (e) => {
    const { scrollHeight, clientHeight } = e.target;
    handleChange(e.target.value);
    setTextareaHeight(
      scrollHeight > clientHeight ? scrollHeight + "px" : `${initialHeight}px`
    );
  };

  useEffect(() => {
    const { scrollHeight, clientHeight } = textareaRef.current;

    setTextareaHeight(
      scrollHeight > clientHeight ? scrollHeight + "px" : `${initialHeight}px`
    );
  }, []);

  return (
    <textarea
      value={value}
      onChange={handleTextChange}
      className={className}
      style={{
        height: textareaHeight,
        width: "100%",
        overflowY: "hidden",
      }}
      ref={textareaRef}
    />
  );
};

export default Textarea;
