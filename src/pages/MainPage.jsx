import { useState, useEffect, useContext } from "react";
import { TextContext } from "../context/TextContext";
import Textarea from "../components/Textarea";

const MainPage = ({ setIsShowMainPage }) => {
  const { text, changeText } = useContext(TextContext);

  const handleChange = (value) => {
    changeText(value);
  };
  return (
    <>
      <Textarea
        value={text}
        handleChange={handleChange}
        className="textarea"
        initialHeight={200}
      />
      <button
        onClick={() => setIsShowMainPage(false)}
        className="button start-button"
      >
        start
      </button>
    </>
  );
};

export default MainPage;
