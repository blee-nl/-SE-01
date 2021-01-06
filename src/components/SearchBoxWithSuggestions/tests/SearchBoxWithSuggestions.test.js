
import React from 'react';
import { render, screen, fireEvent,waitFor} from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event';
import { getSearchSuggestions, getMostSearchedWords } from "~/services/services";
import SearchBoxWithSuggestions from '../index';

jest.mock("../../../services/services");

describe('SearchBoxWithSuggestions', () => {
    const history = createMemoryHistory()
    it('renders the input with default props', () => {
        render(
            <Router history={history}><SearchBoxWithSuggestions /></Router>);

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it('renders the input with correct "Search" placeholder ', () => {
        render(<Router history={history}><SearchBoxWithSuggestions /></Router>);
        const input = screen.getByPlaceholderText('Search');
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('');
    });


    it('renders props test for top search ', () => {
        const { getByTestId } = render(<Router history={history}><SearchBoxWithSuggestions /></Router>);

        const dropdownBtn = getByTestId('dropdown-btn');
        expect(dropdownBtn).toBeInTheDocument();
    });

    it('renders the input with remove button after type any character', () => {
        const { getByTestId } = render(<Router history={history}><SearchBoxWithSuggestions /></Router>);
        const input = getByTestId('search-box');
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('');

        userEvent.type(input, 'terq');
        expect(input).toHaveValue('terq');
        const removeBtn = getByTestId('search-remove-btn');
        fireEvent.click(removeBtn);
        expect(input).toHaveValue('');
    });



    describe('SearchBoxWithSuggestions with api mock ', () => {

        const topSearchListResponse = {data:[
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
        ]};
        getMostSearchedWords.mockResolvedValueOnce(topSearchListResponse);


        it('dropdown button clicks , will show top search list if there is item from api response', async () => {
            const { getByTestId } = render(<Router history={history}><SearchBoxWithSuggestions /></Router>);

            const dropdownBtn = getByTestId('dropdown-btn');
            expect(dropdownBtn).toBeInTheDocument();
            userEvent.click(dropdownBtn); 
            expect(getMostSearchedWords).toHaveBeenCalledTimes(1);
            expect(getMostSearchedWords).toHaveBeenCalledWith();

        });
    });

});