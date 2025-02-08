import Shortcut from "./shortcut/Shortcut.jsx";
import {useState} from "react";

function App() {
    const[os, setOs] = useState(0);
    const[lang, setLang] = useState("en");

    const swedishModifier = [
        ["↑ shift", "option ⌥"],
        ["alt gr", "command ⌘"]
    ]
    const englishModifier = [
        ["↑ shift", "option ⌥"],
        ["", "command ⌘"]
    ]
    const[keyboard, setKeyboard] = useState(swedishModifier);

    const changeKeyboard = () => {
        if(lang === "en") {
            setLang("en")
        }else {
            setLang("sv")
        }
    }

  return (
      <div>
          <div style={{ display: "flex", alignItems:"flex-end", flexDirection: "column"}}>
              <div className="os-switch">
                  <label className="switch">
                      <input type="checkbox" style={{display: "none"}} onClick={() => os === 0 ? setOs(1) : setOs(0)}/>
                      <span className="switch-left">
                      <img className={"switch-logo"} src={"/macos.svg"} alt={"macos svg logo"}/></span>
                      <span className="switch-right">
                      <img className={"switch-logo"} src={"/windows.svg"} alt={"windows svg logo"}/></span>
                  </label>
              </div>
              <div className="os-switch">
                  <label className="switch">
                      <input type="checkbox" style={{display: "none"}} onClick={() => {}}/>
                      <span className="switch-left" style={{backgroundColor: "#C8102E"}}>EN</span>
                      <span className="switch-right" style={{backgroundColor: "#006AA7", color: "#FECC02"}}>SV</span>
                  </label>
              </div>
          </div>
          <table className={"assister"}>
              <tbody>
                  <Shortcut modifierKey={keyboard[0][os]} keyboardKey={["=","0", "}"]} symbol={"="}/>
                  <Shortcut modifierKey={keyboard[0][os]} keyboardKey={[">", "<", "|"]} symbol={">"}/>
                  <Shortcut modifierKey={keyboard[1][os]} keyboardKey={["?", "+", "\\"]} symbol={"\\"}/>
                  <Shortcut modifierKey={keyboard[0][os]} keyboardKey={["/","7", "{"]} symbol={"/"}/>
                  <Shortcut modifierKey={keyboard[0][os]} keyboardKey={["(","8", "["]} symbol={"("}/>
                  <Shortcut modifierKey={keyboard[0][os]} keyboardKey={[")","9", "]"]} symbol={")"}/>
                  <Shortcut modifierKey={keyboard[1][os]} keyboardKey={["(","8", "["]} symbol={"["}/>
                  <Shortcut modifierKey={keyboard[1][os]} keyboardKey={[")","9", "]"]} symbol={"]"}/>
                  <Shortcut modifierKey={keyboard[1][os]} keyboardKey={["/","7", "{"]} symbol={"{"}/>
                  <Shortcut modifierKey={keyboard[1][os]} keyboardKey={["=","0", "}"]} symbol={"}"}/>
              </tbody>
          </table>
      </div>
  )
}

export default App
