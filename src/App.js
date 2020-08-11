import React from "react";
import "./App.scss";
import Logo from "./Image/Logo.png";
import KeyImage from "./Image/Key.png";
import { useState } from "react";

const App = () => {
  const [welcomeField, setWelcomeField] = useState(true);
  const [selectedField, setSelectedField] = useState(2);
  const [checked, setChecked] = useState(false);
  const [percentage, setPercentage] = useState(50);

  const checkBoxValue = () => {
    setChecked(!checked);
    if (checked === true) {
      alert("Yes");
    } else {
      alert("lets go");
    }
  };

  return (
    <div className="App__">
      <div className={`App__Welcomescreen ${welcomeField && "active"}`}>
        {selectedField === 1 && (
          <div className="App__WelcomeSection">
            <div className="App__HideAndChecklist">
              <p onClick={() => setWelcomeField(!welcomeField)}>Hide</p>
              <p onClick={() => setSelectedField(2)}>Go to checklist</p>
            </div>
            <div
              style={{
                padding: "50px",
              }}
            >
              <div className="App__LogoDiv">
                <img src={Logo} alt="Logo__Image" />
              </div>
              <div
                className="App__Text_Paragraph"
                style={{ marginTop: "20px" }}
              >
                <h1>Welcome to WA.WORKS</h1>
                <p>
                  View and interview as many candidates as you like,
                  <br /> and don't pay until you're ready to hire
                </p>
              </div>
              <button className="App__FindCandidatesButton">
                FIND CANDIDATES
              </button>
            </div>
          </div>
        )}

        {selectedField === 2 && (
          <div className="App__DiscoverNextCoWorkerSection">
            <div className="App__DiscoverText">
              <h1>Discover your next coworker</h1>
            </div>
            <div className="App__DiscoverInputFields">
              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => checkBoxValue()}
                />
                Check Me!
              </label>
              <div className="App__LoadingBar">
                <div className="App__KeyImages">
                  <img
                    src={KeyImage}
                    alt="KeyImageOne"
                    className="KeyFirst__"
                  />
                  <img
                    src={KeyImage}
                    alt="KeyImageOne"
                    className="KeySecond__"
                  />

                  <img
                    src={KeyImage}
                    alt="KeyImageOne"
                    className="KeyThird__"
                  />
                </div>
                <div
                  className="App__Perecentage_Span"
                  style={{ width: `${percentage}%` }}
                >
                  <span>{`${percentage}%`} </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        className="App__Button"
        onClick={() => setWelcomeField(!welcomeField)}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default App;
