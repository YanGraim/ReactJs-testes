import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Button } from ".";

describe("Button component", () => {
    it("Should call onclick prop on click", () => {
        const onclick = jest.fn(); // passando uma função mockada 
        render(<Button onClick={onclick} disabled={true}>Meu botao</Button>)


        const button = screen.getByText("Meu botao");
        fireEvent.click(button);
        fireEvent.click(button);

        expect(onclick).toHaveBeenCalledTimes(2);
    })

    it("Should render with gray background if disabled", () => {
        render(<Button onClick={() => { }} disabled={true}>Meu botao</Button>)

        const button = screen.getByRole("button", { name: "Meu botao" })

        expect(button).toHaveStyle({ backgroundColor: "#fafafa" })
    })
})

export default {}