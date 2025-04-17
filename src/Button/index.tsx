import { ReactNode } from "react";


export function Button({ children, onClick, disabled }: {
    children: ReactNode,
    onClick: () => void,
    disabled: boolean
}) {
    return (
        <button style={{ padding: 8, color: "#fff", backgroundColor: disabled ? "#fafafa" : "#121212" }} onClick={onClick}>
            {children}
        </button>
    )
}