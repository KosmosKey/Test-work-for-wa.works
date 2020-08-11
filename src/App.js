import React from "react";
import "./App.scss";
import Logo from "./Image/Logo.png";
import KeyImage from "./Image/Key.png";
import opened from "./Image/Opened.png";
import closed from "./Image/Closed.png";
import SuccessChain from "./Image/SuccessChain.png";
import { useState } from "react";

const App = () => {
  const [welcomeField, setWelcomeField] = useState(false);
  const [selectedField, setSelectedField] = useState(1);
  const [checked, setChecked] = useState(false);
  const [checkedSecond, setCheckedSecond] = useState(false);
  const [checkedThird, setCheckedThird] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const checkBoxValue = () => {
    setChecked(!checked);
    if (checked === false) {
      setPercentage(percentage + 20);
    } else {
      setPercentage(percentage - 20);
    }
  };

  const checkBoxSecond = () => {
    setCheckedSecond(!checkedSecond);
    if (checkedSecond === false) {
      setPercentage(percentage + 20);
    } else {
      setPercentage(percentage - 20);
    }
  };

  const checkBoxThird = () => {
    setCheckedThird(!checkedThird);
    if (checkedThird === false) {
      setPercentage(percentage + 60);
    } else {
      setPercentage(percentage - 60);
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
                <a
                  href="https://wa.works/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  FIND CANDIDATES
                </a>
              </button>
            </div>
          </div>
        )}

        {selectedField === 2 && (
          <div className="App__DiscoverNextCoWorkerSection">
            <div className="App__DiscoverText">
              <h1 style={{ textAlign: "left" }}>Discover your next coworker</h1>
            </div>
            <div className="App__DiscoverInputFields">
              <div className="App__Labels">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    checked={checked}
                    onChange={() => checkBoxValue()}
                  />
                  <label htmlFor="checkbox2">
                    <span>Upload logo</span>
                  </label>
                </div>

                <div className="checkboxSecond">
                  <input
                    type="checkbox"
                    className="CheckBox__Second"
                    id="checkbox3"
                    checked={checkedSecond}
                    onChange={() => checkBoxSecond()}
                  />
                  <label htmlFor="checkbox3">
                    <span>Add description</span>
                  </label>
                </div>

                <div className="checkboxThird">
                  <input
                    type="checkbox"
                    id="checkbox4"
                    checked={checkedThird}
                    onChange={() => checkBoxThird()}
                  />
                  <label htmlFor="checkbox4">
                    <span>Upgrade</span>
                  </label>
                </div>
              </div>

              <div className="App__LoadingBar">
                <div className="App__KeyImages">
                  <img
                    src={KeyImage}
                    alt="KeyImageOne"
                    className="KeyFirst__"
                  />
                  <img
                    src={KeyImage}
                    alt="KeyImageTwo"
                    className="KeySecond__"
                  />

                  <img
                    src={KeyImage}
                    alt="KeyImageThree"
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
            <div className="App__CloseIcons">
              <div
                className="App__CloseIconsText"
                style={{ marginRight: "50px" }}
              >
                {checked ? (
                  <img
                    onClick={() => setSelectedField(3)}
                    src={opened}
                    alt="closedOpenFirst"
                  />
                ) : (
                  <img src={closed} alt="closedOpenFirst" />
                )}
                <p>
                  Free interviews
                  <br /> Pay per hire
                </p>
              </div>
              <div className="App__CloseIconsText">
                {checkedSecond ? (
                  <img
                    src={opened}
                    onClick={() => setSelectedField(3)}
                    alt="closedOpenFirst"
                  />
                ) : (
                  <img src={closed} alt="closedOpenFirst" />
                )}
                <p>
                  Free interviews
                  <br /> Pay per hire
                </p>
              </div>
              <div
                className="App__CloseIconsText"
                style={{ marginLeft: "50px" }}
              >
                {checkedThird ? (
                  <img
                    src={opened}
                    onClick={() => setSelectedField(3)}
                    alt="closedOpenFirst"
                  />
                ) : (
                  <img src={closed} alt="closedOpenFirst" />
                )}
                <p>
                  Free interviews
                  <br /> Pay per hire
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedField === 3 ? (
          <div className="App__SuccessMessageChain">
            <div className="App__ChainNav">
              <p onClick={() => setSelectedField(2)}>Back</p>
              <p onClick={() => setWelcomeField(!welcomeField)}>Hide</p>
            </div>
            <div className="App_chainImageAndText">
              <div className="App__SectionSuccess">
                <img src={SuccessChain} alt="SuccessChain" />
              </div>
              <div className="App_ChainText">
                <h2>Juhuu, you're ready for pokes!</h2>
                <p>
                  Pokes are candidate's way of showing <br />
                  interest in your workplace
                </p>
                <button>
                  <a
                    href="https://wa.works/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    FIND CANDIDATES
                  </a>
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
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
