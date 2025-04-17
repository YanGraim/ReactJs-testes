import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from ".";

describe("Form component", () => {
    it("should test form and input component", () => {
        render(<Form />)

        const nameInput = screen.getByPlaceholderText("Digite seu nome") as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText("Digite seu email") as HTMLInputElement;
        const submitButton = screen.getByText("Cadastrar");

        fireEvent.change(nameInput, { target: { value: "Yan" } });
        fireEvent.change(emailInput, { target: { value: "yan@teste.com" } });

        expect(nameInput.value).toBe("Yan");
        expect(emailInput.value).toBe("yan@teste.com")

        const consoleLogSpy = jest.spyOn(console, "log");

        fireEvent.submit(submitButton);

        expect(consoleLogSpy).toHaveBeenCalledWith("Cadastrado com sucesso")
        expect(nameInput.value).toBe("")
        expect(emailInput.value).toBe("")
    })
})