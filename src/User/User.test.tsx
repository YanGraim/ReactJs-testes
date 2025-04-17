import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { User } from "."


describe("User component", () => {

    it("Should check if the name is not displayed when component is mounted", () => {
        render(<User />)

        const message = screen.queryByText("Usuário online: Yan Graim")
        expect(message).not.toBeInTheDocument();
    })

    it("Should test if the value typed in the input is correct", () => {
        render(<User />)

        const inputElement = screen.getByPlaceholderText("Digite o nome")

        fireEvent.change(inputElement, { target: { value: "Yan Graim" } })

        expect(inputElement).toHaveValue("Yan Graim")
    })

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