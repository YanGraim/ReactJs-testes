import { render, screen, fireEvent } from "@testing-library/react";
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
})

export default {}