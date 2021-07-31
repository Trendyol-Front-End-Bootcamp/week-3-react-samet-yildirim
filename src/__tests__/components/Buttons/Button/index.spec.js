import Button from "../../../../components/Buttons/Button";
import Faker from "faker";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
const {
  lorem: { word },
} = Faker;
const fakeText = word();

describe("Button", () => {
  it("should render correcty", () => {
    render(<Button />);
  });
  it("should render children correcty", () => {
    const { getByText } = render(<Button>{fakeText}</Button>);
    getByText(fakeText);
  });
  it("should act like a link", () => {
    const { getByText } = render(
      <Router>
        <Button href={"/test/1"}>{fakeText}</Button>
      </Router>
    );
    fireEvent.click(getByText(fakeText));
    expect(window.location.pathname).toBe("/test/1");
  });
});
