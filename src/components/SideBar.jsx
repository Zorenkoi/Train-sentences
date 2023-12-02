import { useState, useEffect, useContext } from "react";
import { TextContext } from "../context/TextContext";

const SideBar = () => {
  const { orderSentence, chooseSentence, arrSentences } =
    useContext(TextContext);

  return (
    <div className="sidebar">
      {arrSentences.map((_, i) => {
        const orderClassName = orderSentence === i ? "order active" : "order";

        return (
          <div onClick={() => chooseSentence(i)} className={orderClassName}>
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
