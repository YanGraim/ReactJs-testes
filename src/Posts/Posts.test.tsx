import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Posts } from ".";
import { rest } from "msw"
import { setupServer } from "msw/node"

describe("Posts components", () => {

    const worker = setupServer(
        rest.get("https://jsonplaceholder.typicode.com/users", async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "address": {
                            "street": "Kulas Light",
                            "suite": "Apt. 556",
                            "city": "Gwenborough",
                            "zipcode": "92998-3874",
                            "geo": {
                                "lat": "-37.3159",
                                "lng": "81.1496"
                            }
                        },
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org",
                        "company": {
                            "name": "Romaguera-Crona",
                            "catchPhrase": "Multi-layered client-server neural-net",
                            "bs": "harness real-time e-markets"
                        }
                    },
                ])
            )
        })
    )

    beforeAll(() => worker.listen())

    afterEach(() => worker.resetHandlers())

    afterAll(() => worker.close())


    it("should fetch api and show users", async () => {
        render(<Posts />)

        const buttonElement = screen.getByText("Buscar usuarios")

        fireEvent.click(buttonElement)

        const nameUser = await screen.findByText("Leanne Graham");

        expect(nameUser).toBeInTheDocument()
    })

    it("should fetch users when component mount", async () => {
        render(<Posts />)

        const name = await screen.findByText("Leanne Graham")
        const username = await screen.findByText("Bret")

        expect(name).toBeInTheDocument()
        expect(username).toBeInTheDocument()
    })
})


export default {}