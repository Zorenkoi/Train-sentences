import { useState, useEffect, useContext } from "react";
import Sentence from "../components/Sentence";
import { TextContext } from "../context/TextContext";
import Textarea from "../components/TextArea";
import Input from "../components/Input";
import SideBar from "../components/SideBar";

const SentencePage = ({ setIsShowMainPage }) => {
  const {
    orderSentence,
    arrSentences,
    nextSentence,
    prevSentence,
    chooseSentence,
  } = useContext(TextContext);

  const sentenceText = arrSentences[orderSentence]
    ? arrSentences[orderSentence].sentenceText
    : "";

  return (
    <div className="sentence-grid">
      <div className="column-2">
        <Sentence text={sentenceText} />
        <Input text={sentenceText} />
        <div className="button-container">
          <button onClick={prevSentence} className="button">
            prev
          </button>
          <button onClick={nextSentence} className="button">
            next
          </button>
        </div>
        <button onClick={() => setIsShowMainPage(true)} className="button">
          return
        </button>
      </div>

      <SideBar />
    </div>
  );
};

export default SentencePage;
