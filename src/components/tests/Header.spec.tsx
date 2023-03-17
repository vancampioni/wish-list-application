import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'

const renderComponent = () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}
describe('Header Component', () => {
    it('should render the logo and the navigation bar', () => {
        renderComponent()

        expect(screen.getByText('MagaNets')).toBeInTheDocument()
        expect(screen.getByText('Cidade: São Paulo')).toBeInTheDocument()
        expect(screen.getByText('Central de atendimento')).toBeInTheDocument()
        expect(screen.getByText('Lista de desejo')).toBeInTheDocument()
    })
})