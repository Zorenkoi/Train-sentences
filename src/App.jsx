import { useState } from "react";

import MainPage from "./pages/MainPage";
import SentencePage from "./pages/SentencePage";

function App() {
  const [isShowMainPage, setIsShowMainPage] = useState(true);

  return (
    <div className="wrapper">
      {isShowMainPage ? (
        <MainPage setIsShowMainPage={setIsShowMainPage} />
      ) : (
        <SentencePage setIsShowMainPage={setIsShowMainPage} />
      )}
    </div>
  );
}

export default App;
