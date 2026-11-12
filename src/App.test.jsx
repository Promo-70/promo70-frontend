import { fireEvent, render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('renderiza el título y el contador funciona', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', { name: /get started/i }),
  ).toBeInTheDocument()

  fireEvent.click(screen.getByRole('button', { name: /count is 0/i }))

  expect(
    screen.getByRole('button', { name: /count is 1/i }),
  ).toBeInTheDocument()
})
