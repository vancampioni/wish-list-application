import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'

const renderComponent = () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}

describe('Home Page', () => {
    it('should render the page Home', () => {

        renderComponent()

        expect(screen.getByText('Home')).toBeInTheDocument()
        
    })
})