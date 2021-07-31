import { render , fireEvent} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import BackButton from '../../../../components/Buttons/BackButton'
describe("BackButton",()=>{
    it("should render BackButton",()=>{
        render(
            <Router>
                <BackButton/>
            </Router>
        )
    })
    it("should go home when click",()=>{
       const { getByText } = render(
            <Router>
                <BackButton/>
            </Router>
        )
        fireEvent.click(getByText(new RegExp("<","i")))
        expect(window.location.pathname).toBe("/")
    })
})