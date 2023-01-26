import { fireEvent, render, screen } from '@testing-library/react'
import Counter from './Counter'

describe('<Counter />', () => {
    it('Should initialize counter with zero', () => {
        render(<Counter initialCount={0} />)

        const value = screen.getByTestId('countNumber').textContent

        expect(value).toEqual('0')

        screen.debug()
    })

    it('Should increment 1 when click at increment button', () => {
        render(<Counter initialCount={0} />)

        const buttonIncrement = screen.getByRole('button', { name: 'Increment' })

        expect(buttonIncrement).toBeEnabled()

        fireEvent.click(buttonIncrement)

        expect(screen.getByTestId('countNumber').textContent).toEqual('1')
    })
})

