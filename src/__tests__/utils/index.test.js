import { getEpisodeIds, fetchCharacters } from "../../utils";
import axios from "axios";
import { jest } from "@jest/globals";

jest.mock("axios");

describe("Util Functions getEpisodeIds", () => {
  it("should return numbers of array", () => {
    const ids = [
      "https://example.com/1",
      "https://example.com/2",
      "https://example.com/12",
      "https://example.com/13",
    ];
    const result = getEpisodeIds(ids);

    expect(result).toEqual(["1", "2", "12", "13"]);
  });
  it("should return empty array if ids doesnt passed to function", () => {
    const ids = null;
    const result = getEpisodeIds(ids);

    expect(result).toEqual([]);
  });
});

describe("Util Functions fetchCharacters", () => {
  it("should return character(s) info", async () => {
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: {
          info: {
            count: 671,
            next: "https://rickandmortyapi.com/api/character/?page=2",
            pages: 34,
            prev: null,
          },
          results: [
            {
              id: 1,
              name: "Rick Sanchez",
              status: "Alive",
              species: "Human",
              type: "",
              gender: "Male",
              origin: {
                name: "Earth (C-137)",
                url: "https://rickandmortyapi.com/api/location/1",
              },
              location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20",
              },
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              episode: [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                "https://rickandmortyapi.com/api/episode/3",
              ],
            },
          ],
        },
      });
    });
    expect(await fetchCharacters([1])).toEqual({
      info: {
        count: 671,
        next: "https://rickandmortyapi.com/api/character/?page=2",
        pages: 34,
        prev: null,
      },
      results: [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1",
          },
          location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20",
          },
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          episode: [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
          ],
        },
      ],
    });
  });
  it("should return Error if query param is not a number or stringNumber", () => {
    const query = "test";
    expect(async () => await fetchCharacters(query)).rejects.toThrow(
      "Query must be a number"
    );
  });
});
