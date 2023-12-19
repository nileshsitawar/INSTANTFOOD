import { fireEvent, render,screen } from "@testing-library/react"

import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom"

// we are using await in fetch and promise so we have to use "act"

import { BrowserRouter } from "react-router-dom"; // BrowseRouter  ko import cause of Link component whic is coming from BrowserRouter

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    })
});


it("Should Search Res List for burger text input  ", async ()=>{

    await act(async () => render(
    <BrowserRouter>
      <Body/>
    </BrowserRouter>));
    
    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput");


    fireEvent.change(searchInput,{ target: {value:"pizza"} });

    fireEvent.click(searchBtn);
    // screen should load  3 restra cards
    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(3);





    //writing something in input search
})



it("Should Filter top Rated  Restra  ", async ()=>{

    await act(async () => render(
    <BrowserRouter>
      <Body/>
    </BrowserRouter>));
    
    const cardsBeforefilter = screen.getAllByTestId("resCard")

    expect(cardsBeforefilter.length).toBe(20)

    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Resaurants"});



    fireEvent.click(topRatedBtn);
    // screen should load  3 restra cards
    const cardsAfterfilter = screen.getAllByTestId("resCard")

    expect(cardsAfterfilter.length).toBe(19);





    //writing something in input search
})