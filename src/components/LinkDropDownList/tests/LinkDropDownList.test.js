import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import LinkDropDownList from "../index";

describe('LinkDropDownList', () => {
    describe('LinkDropDownList test with prop condition', () => {
        const mockItems = [
            {
                id: '1568',
                name: "Gantrui",
                quantity: 350,
            },
            {
                id: '1023',
                name: "Dailturi",
                quantity: 350,
            },
            {
                id: '1036',
                name: "Tinturilly",
                quantity: 350,
            },
        ];
        it('with default props', () => {
            const { container } = render(<BrowserRouter><LinkDropDownList /></BrowserRouter>);
            expect(container.querySelector('ul').children.length).toBe(0);

        });
        it('has is-show item props', () => {
            const { container } = render(<BrowserRouter><LinkDropDownList isShow items={mockItems} title="List title" /></BrowserRouter>);
            const titleElement = screen.getByTestId('dropdown-list-title');
            expect(titleElement).toBeInTheDocument();
            expect(titleElement).toHaveTextContent("List title");
            expect(container.querySelector('ul').children.length).toBe(3); 
            
        });
    });

});
