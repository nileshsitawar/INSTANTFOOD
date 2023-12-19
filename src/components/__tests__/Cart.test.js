import { fireEvent, render , screen} from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATAMENU from "../mocks/mockREsMenu.json"
import Header from "../Header"
import Cart from "../Cart"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

//fetch resolve karnysathi global.fetch
global.fetch = jest.fn(()=> 
        Promise.resolve({
        json: () => Promise.resolve(MOCK_DATAMENU)
        
    })
)
it("should load Restratant Menu Component", async () =>{
    await act(async () => 
    render(

        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
            <RestaurantMenu/>
            <Cart/>
            </Provider>;
        </BrowserRouter>))
    
    const accordionHeader = screen.getByText("Veg Pizza (16)");

    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("fooditems").length).toBe(16);
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button",{name:"Add +"})
    // console.log(addBtns.length)
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1])

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(18);
    fireEvent.click(screen.getByRole("button",{name:"Clear Me"}));
    expect(screen.getAllByTestId("fooditems").length).toBe(16);
    expect(screen.getByText("Cart is Empty. Add Items to the card")).toBeInTheDocument


    


    
});