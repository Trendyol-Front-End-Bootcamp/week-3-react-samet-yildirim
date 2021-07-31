import CharacterCard from "../../../components/CharacterCard";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Faker from "faker";

const {
  datatype: { number },
  lorem: { word },
  internet: { url, },
} = Faker;

describe("CharacterCard", () => {
  it("should render character card", () => {
    const CharacterMock = {
      id: number(),
      name: word(),
      status: word(),
      species: word(),
      type: "",
      gender: word(),
      origin: {
        name: word(),
        url: url(),
      },
      location: {
        name: word(),
        url: url(),
      },
      image: url(),
      episode: [url(), url(), url()],
      url: url(),
    };
    const { getByText } = render(
      <Router>
        <CharacterCard {...CharacterMock} />
      </Router>
    );
    const card = getByText(CharacterMock.name);
    fireEvent.click(card);
    expect(window.location.pathname).toBe(`/character/${CharacterMock.id}`);
  });
});
