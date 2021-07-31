import { render, fireEvent,screen } from '@testing-library/react'
import Home from '../../../pages/Home'
describe("Home page",()=>{
    // it("should render Home without crashing",()=>{
    //     render(<Home/>)
    // })
    it("should render Home without crashing",()=>{
        const {container} = render(<Home/>)
        // const HomePage=<Home/>
       
        // const statusSelectBox=container.getEleme()
        // const genderSelectBox=getByText(/sort by gender/i )
        // Home.find({ name: "status" })
       const [statusSelectBox,genderSelectBox]=Array.from(container.getElementsByClassName("sortByWrapperSelectBox"))
       fireEvent.change(statusSelectBox, {
        target: { value: "dead" },
      });
      fireEvent.change(genderSelectBox, {
        target: { value: "male" },
      });
    })
})