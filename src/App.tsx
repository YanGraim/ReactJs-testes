import { useState } from 'react'
import './App.css'
import { User } from './User'
import { Form } from './Form'
import { Posts } from './Posts'

function App() {
  const [message, setMessage] = useState("Bem vindo ao projeto")

  return (
    <div>
      <h1 className='titulo'>Configurando testes</h1>
      <p>{message}</p>
      <h2>testando</h2>

      <button onClick={() => setMessage("fazendo testes")}>Alterar mensagem</button>

      <hr />
      <br />

      <User />
      <hr />
      <br />
      <br />
      <Form />
      <hr />
      <br />
      <br />
      <Posts />
    </div>
  )
}

export default App
