import { createContext, useState } from "react";
import uniqid from "uniqid";
import useLocalStorage from "../hooks/useLocalStorage";

export const TextContext = createContext({});

const TextProvider = ({ children }) => {
  const [text, setText] = useLocalStorage("text", "");
  const [arrSentences, setArrSentences] = useLocalStorage("arrSentences", []);

  const changeText = (newText) => {
    setText(newText);

    const newArrSentences = getArrSentences(newText);
    setArrSentences(newArrSentences);
  };

  /////////////////////////////////////////////////////

  const [orderSentence, setOrderSentence] = useLocalStorage("order", 0);

  const nextSentence = () => {
    if (orderSentence >= arrSentences.length - 1) {
      setOrderSentence(arrSentences.length - 1);
      return;
    }

    const newOrderSentences = orderSentence + 1;
    setOrderSentence(newOrderSentences);
  };
  const prevSentence = () => {
    if (orderSentence <= 0) {
      setOrderSentence(0);
      return;
    }

    const newOrderSentences = orderSentence - 1;
    setOrderSentence(newOrderSentences);
  };
  const chooseSentence = (order) => {
    if (orderSentence >= 0 && orderSentence <= arrSentences.length - 1)
      setOrderSentence(order);
  };

  const value = {
    text,
    changeText,
    orderSentence,
    chooseSentence,
    arrSentences,
    nextSentence,
    prevSentence,
  };

  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
};

export default TextProvider;

function getArrSentences(text) {
  return text
    .split(".")
    .map((sentenceText) => ({
      id: uniqid(),
      sentenceText,
    }))
    .filter(({ sentenceText }) => sentenceText !== " " && sentenceText !== "");
}
