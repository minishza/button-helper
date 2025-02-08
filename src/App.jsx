import Shortcut from "./shortcut/Shortcut.jsx";
import {useState} from "react";

function App() {
    const[os, setOs] = useState(0);
    const modifier = ["shift", "option"]

  return (
      <div>
          <div style={{ display: "flex", justifyContent: "end" }}>
              <div className="os-switch">
                  <label className="switch">
                      <input type="checkbox" style={{display: "none"}} onClick={() => os === 0 ? setOs(1) : setOs(0)}/>
                      <span className="switch-left">
                      <img className={"switch-logo"} src={"public/macos.svg"} alt={"macos svg logo"}/></span>
                      <span className="switch-right">
                      <img className={"switch-logo"} src={"public/windows.svg"} alt={"windows svg logo"}/></span>
                  </label>
              </div>
          </div>
          <div className={"assister"}>
              <Shortcut modifierKey={modifier[os]} keyboardKey={"9"}/>
          </div>
      </div>
  )
}

export default App
