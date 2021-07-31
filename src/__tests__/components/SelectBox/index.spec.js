import SelectBox from "../../../components/SelectBox";
import Faker from "faker";
import { render, fireEvent } from "@testing-library/react";

const {
  lorem: { word },
} = Faker;
const name = word();
const className = word();
const selectDescription = word();
const options = [
  { value: word(), text: word() },
  { value: word(), text: word() },
];
describe("SelectBox", () => {
  it("should run onChange function that came from props", () => {
    const onChange = jest.fn();
    const { container } = render(
      <SelectBox
        options={options}
        name={name}
        className={className}
        selectDescription={selectDescription}
        onChange={onChange}
      />
    );
    fireEvent.change(container.getElementsByClassName(className)[0], {
      target: { value: options[0].text },
    });

    expect(onChange).toBeCalled();
  });
});
