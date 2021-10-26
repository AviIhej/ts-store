import  { render, screen } from '@testing-library/react'

import { Person } from './Person';
import React from 'react'

test('renders a name', () => {
    render(<Person name="William" />)
    const linkElement = screen.getByText(/My name is/i);
    expect(linkElement).toBeInTheDocument()
})