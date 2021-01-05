import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    defaultViewport: MINIMAL_VIEWPORTS,
  },
}