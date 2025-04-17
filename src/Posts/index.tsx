import { useState } from "react";
import axios from "axios";

interface UsersProps {
    id: number;
    name: string;
    email: string;
    username: string;
}

export function Posts() {
    const [users, setUsers] = useState<UsersProps[]>([])

    async function handleGetUSers() {
        const response = await axios.get("https://jsonplaceholder.typecode.com/users")
        setUsers(response.data)
    }

    return (
        <div>
            <button onClick={handleGetUSers}>Buscar usuarios</button>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <strong>{user.username}</strong>
                    <br />
                </div>
            ))}
        </div>
    )
}