import React from "react";
import WelcomePage from "./WelcomePage.tsx/WelcomePage";
import scss from "../pages/HomePage.module.scss";
import DefaoultInput from "./InputDebounce/Defaoult";
import DebounceInput from "./InputDebounce/DebounceInput";
const HomePage = () => {
  return (
    <div>
      <div className={scss.home}>
        <WelcomePage />
      </div>
      <div className={scss.review}>
        <h1>Defoult Input</h1>
        <DefaoultInput />
      </div>
      <br />
      <hr />
      <br />
      <div className={scss.review}>
        <h1>Debounce Input</h1>
        <DebounceInput />
      </div>
    </div>
  );
};

export default HomePage;
