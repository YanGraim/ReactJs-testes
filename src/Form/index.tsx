import { FormEvent, useState } from "react";

export function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        console.log("Cadastrado com sucesso")

        setName('')
        setEmail('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Digite seu nome</label>
                    <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label>Digite seu email</label>
                    <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}