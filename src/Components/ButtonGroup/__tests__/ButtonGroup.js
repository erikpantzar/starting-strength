import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import ButtonGroup from '../ButtonGroup'

it.only('renders correct buttons', () => {
  const links = [
    {
      text: 'Link A',
      url: 'link/a',
    },

    {
      text: 'Link B',
      url: 'link/b',
    },
  ]
  const { getByText, getAllByRole } = render(
    // Anything using Link needs to be wrapped in a Router
    <MemoryRouter>
      <ButtonGroup links={links} />
    </MemoryRouter>
  )

  // a tags are considered role=link by react testing library
  expect(getAllByRole('link').length).toBe(2)

  expect(getByText('Link A')).toBeInTheDocument()
  expect(getByText('Link B')).toBeInTheDocument()

  expect(getByText('Link A').closest('a')).toHaveAttribute('href', '/link/a')
  expect(getByText('Link B').closest('a')).toHaveAttribute('href', '/link/b')
})
