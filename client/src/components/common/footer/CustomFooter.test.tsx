import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import MockDate from 'mockdate'

import CustomFooter from './CustomFooter'

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)
beforeAll(() => {
  MockDate.set('2020-10-31')
})

it('CustomFooter label', () => {
  const { container, getByText } = render(<CustomFooter />)

  expect(getByText(/2021/i)).toBeTruthy()
  expect(container.firstChild).toHaveClass('footer')
})
