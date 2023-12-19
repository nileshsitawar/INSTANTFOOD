import { fireEvent,render,screen} from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"

import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom"

it("Should render Header Component with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store= {appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name: "Login"});  // he specifically Login name button find karte suppose there were so many button with same tag we we pass {name: "Login"} --> inside getByRole("button",{})
    // const loginButton = screen.getByText("Login"); //by text
    expect(loginButton).toBeInTheDocument()
});
it("Should render Header Component with a Cart item 0",()=>{
    render(
    <BrowserRouter>
    <Provider store= {appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    const CartItems = screen.getByText("Cart - (0 items)");  


    expect(CartItems).toBeInTheDocument();
});
it("Should render Header Component with a Cart item",()=>{
    render(
    <BrowserRouter>
    <Provider store= {appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    const CartItems = screen.getByText("Cart - (0 items)");

    

   // const CartItems = screen.getByText("/Cart/"); // regex (/ / )this will check if Cart is in document or not exact complete part nasel tar bhi chalte 

    expect(CartItems).toBeInTheDocument();
});

it("Should render Header Component with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store= {appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});  

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"}); 
    expect(logoutButton).toBeInTheDocument()
});