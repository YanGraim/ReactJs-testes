import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { User } from "."


describe("User component", () => {
    it("should display the username after typing in the input and click on the button", () => {
        render(<User />)

        const input = screen.getByPlaceholderText("Digite o nome")
        const button = screen.getByRole("button", { name: "Cadastrar" })

        fireEvent.change(input, { target: { value: "Yan Graim" } })
        fireEvent.click(button)

        const message = screen.getByText("Usuário online: Yan Graim")
        expect(message).toBeInTheDocument();
    })
})

export default {}