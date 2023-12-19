import { render,screen } from "@testing-library/react";

import MOCK_DATA from "../mocks/resCardMock.json"

import '@testing-library/jest-dom'

import RestaurantCard from "../RestraurantCard"
it("Should render RestaurantCard Component with props Data",()=>{
    render(
        <RestaurantCard resdata={MOCK_DATA} />)

    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
});



it("Should render RestaurantCard Component with Promoted label",()=>{
    // Homework for me withPromotedLabel()
});