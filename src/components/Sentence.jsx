import { useState, useEffect } from "react";
import uniqid from "uniqid";

const Sentence = ({ text }) => {
  const [isWordsHidden, setIsWordsHidden] = useState(false);
  const [arrWords, setArrWords] = useState([]);

  useEffect(() => {
    const newArrWords = getArrWords(text);
    setArrWords(newArrWords);
    setIsWordsHidden(false);
  }, [text]);

  const toggleWordsHidden = () => {
    setIsWordsHidden((value) => !value);
  };

  return (
    <div className="word-wrapper">
      <div className="word-container">
        {arrWords.map((wordObj) => {
          return (
            <Word key={wordObj.id} {...wordObj} isWordsHidden={isWordsHidden} />
          );
        })}
      </div>

      <button onClick={toggleWordsHidden} className="button">
        {isWordsHidden ? "Show" : "Hide"}
      </button>
    </div>
  );
};

function getArrWords(text) {
  return text
    .split(" ")
    .map((word) => ({
      word: word.replace(/\n/g, ""),
      id: uniqid(),
    }))
    .filter(({ word }) => word !== "" && word !== " ");
}

const Word = ({ isWordsHidden, word, id }) => {
  const [isShowed, setIsShowed] = useState(false);

  let wordClassName = "word";

  if (isWordsHidden && !isShowed) {
    wordClassName += " hidden";
  }

  if (isShowed) {
    wordClassName += " showed";
  }

  const toggleIsShowed = () => {
    setIsShowed((value) => !value);
  };

  return (
    <div onClick={toggleIsShowed} className={wordClassName}>
      {word}
    </div>
  );
};

export default Sentence;
