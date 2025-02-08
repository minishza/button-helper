import copy from "copy-to-clipboard";
import {useState} from "react";

export default function Symbol({value}) {
    const[copied, setCopied] = useState(false);

    return (
        <button
            className={"key"}
            onClick={() => {
                copy(value)
                setCopied(true)
                setTimeout(() => {
                    setCopied(false);
                }, 700)
            }}
        >{copied ? `Kopierat ${value}` : value}</button>
    )
}