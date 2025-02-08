export default function KeyboardKey({value}) {
    return (
        <td>
            <button
                className={"key keyboard"}
            >
                <div className={"keys"}>
                    <div className={"key-pair"}>
                        <div>{value[0]}</div>
                        <div>{value[1]}</div>
                    </div>
                    <div>{value.length === 3 ? value[2]: ""}</div>
                </div>
            </button>
        </td>
    )
}