
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '../index';

describe('SearchInput', () => {
    const mockDefaultProps = {
        setSearchWord: jest.fn(),
        handleSubmit: jest.fn(),
    }
    it('renders the input with default props', () => {
        render(<SearchInput {...mockDefaultProps} />);

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it('renders the input with correct "Search" placeholder', () => {
        render(<SearchInput  {...mockDefaultProps} />);

        const input = screen.getByPlaceholderText('Search');
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('');
    });


    it('renders props test for top search ', () => {
        const { getByTestId } = render(<SearchInput  {...mockDefaultProps} enableTopSearchesButton />);

        const dropdownBtn = getByTestId('dropdown-btn');
        expect(dropdownBtn).toBeInTheDocument();
    });

    it('renders the input with remove button after type any character', () => {
        const { getByTestId } = render(<SearchInput {...mockDefaultProps} />);
        const input = getByTestId('search-box');
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('');

        userEvent.type(input, 'terq');
        expect(input).toHaveValue('terq');
        const removeBtn = getByTestId('search-remove-btn');
        fireEvent.click(removeBtn);
        expect(input).toHaveValue('');
    });



});