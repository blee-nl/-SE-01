import React from "react";
import { render,screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from "../index";

describe('Header', () => {
  // it ('render snapshot',()=>{
  //   const { container }  =render(<BrowserRouter><Header /></BrowserRouter>); 
  //   expect(container).toMatchSnapshot();
  // });
  it('doc elements check', () => {
    const { container }  =render(<BrowserRouter><Header /></BrowserRouter>);
    const linkElement = screen.getByTestId('home-logo-link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.href).toBe("http://localhost/");
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(container.querySelector('form')).toBeInTheDocument();
  });

});

