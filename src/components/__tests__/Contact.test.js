import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should load contact us component", () => {
    //first render on rjsdom
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

});

test("Should load Button  inside contact component", () => {
    //first render on rjsdom
    render(<Contact/>);

    // const button = screen.getByRole("button"); // getByRole seatch for html tag 
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();

});