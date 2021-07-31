import { render } from "@testing-library/react";
import StatusBar from "../../../components/StatusBar";
describe("StatusBar",()=>{
    it('should render correcty',()=>{
        render(<StatusBar/>)
    })
    it('should have barColorGreen class',()=>{
       const {getByTestId}= render(<StatusBar status={"Alive"}/>)
       expect(getByTestId("status")).toHaveClass("barColorGreen")
    })
    it('should have barColorRed class',()=>{
       const {getByTestId}= render(<StatusBar status={"Dead"}/>)
       expect(getByTestId("status")).toHaveClass("barColorRed")
    })
    it('should have barColorGrey class',()=>{
       const {getByTestId}= render(<StatusBar/>)
       expect(getByTestId("status")).toHaveClass("barColorGrey")
    })
})