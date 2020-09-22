import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

test("Verifica input", ()=>{
    const { getByPlaceholderText, getByText } = render(<App/>)
    const input = getByPlaceholderText(/Novo post/i)
    const adicionar = getByText(/adicionar/i)


    
    fireEvent.change(input)

    expect(input.value).toBeEmpty()
    
})
