import { useState } from 'react'
import './App.css'
import { Button } from './Button'

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
      <Button onClick={() => alert("clicou")} disabled={true}>
        Clique aqui
      </Button>
    </div>
  )
}

export default App
