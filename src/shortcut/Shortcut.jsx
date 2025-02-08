import KeyboardKey from "./KeyboardKey.jsx";
import Sign from "./Sign.jsx";
import Symbol from "./Symbol.jsx";
import ModifierKey from "./ModifierKey.jsx";

export default function Shortcut({modifierKey, keyboardKey, symbol}) {
    return (
        <tr className={"shortcut"}>
            {modifierKey === "" ? <KeyboardKey value={keyboardKey} /> :
                <>
                <ModifierKey modifier={modifierKey} />
                <Sign symbol={"+"}  />
                <KeyboardKey value={keyboardKey} />
                </>
            }
            <Sign symbol={"="} />
            <Symbol value={symbol}/>
        </tr>
    )
}