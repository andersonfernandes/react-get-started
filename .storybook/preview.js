import React from 'react'
import { addDecorator } from '@storybook/react'

import GlobalStyle from '../src/components/GlobalStyle'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(storyfn => (
  <>
    <GlobalStyle />
    { storyfn() }
  </>
))
