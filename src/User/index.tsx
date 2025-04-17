import { useState } from "react";

export function User() {
    const [name, setName] = useState("");
    const [user, setUSer] = useState("");

    return (
        <div>
            <input type="text" placeholder="Digite o nome" onChange={(e) => setName(e.target.value)} value={name} />

            <button onClick={() => setUSer(name)}>Cadastrar</button>
            <br />
            {user !== "" && <strong>Usuário online: {user}</strong>}
        </div>
    )
}