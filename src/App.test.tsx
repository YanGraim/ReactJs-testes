import { render, screen } from "@testing-library/react"
import App from "./App"


function sum(n1: number, n2: number) {
    return n1 + n2
}


function media(n1: number, n2: number) {
    const resultado = (n1 + n2) / 2
    if (resultado >= 7) {
        return "aprovado"
    } else {
        return "exame"
    }
}


// criar um bloco que agrupa varios testes relacionados
describe("First teste app component", () => {
    it("should add 5 + 2 to equal 7", () => {
        expect(sum(5, 2)).toBe(7)
    })

    it("should calculate the average and return exame", () => {
        expect(media(5, 6)).toBe("exame")
        expect(media(7, 8)).toBe("aprovado")
    })

});


describe("App component", () => {
    it("should render app component", () => {
        render(<App />)
        screen.getByText("Configurando testes")
    })
})

export default {}