export default function ModifierKey({modifier}) {
    return (
        <td>
            <button
                className={"key modifier"}
            >{modifier}</button>
        </td>
    )
}