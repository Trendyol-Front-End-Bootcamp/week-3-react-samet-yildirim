import axios from "axios";
export const getEpisodesFromLocalStorage = async (episodeIds) => {
  !localStorage.getItem("episodes") && localStorage.setItem("episodes", "[]");

  const episodesFromStorage = await JSON.parse(
    localStorage.getItem("episodes")
  );
  const epidodeIdsInStorage = episodesFromStorage.map((episode) =>
    episode.id.toString()
  );

  let neededData = []; //return data
  let neededEpisodeIds = []; // Ids that we doesnt have in localStorage

  episodeIds.forEach(
    (episodeId) =>
      !epidodeIdsInStorage.includes(episodeId) &&
      neededEpisodeIds.push(episodeId)
  );

  if (neededEpisodeIds.length <= 0) {
    neededData = await episodesFromStorage.filter((episode) =>
      episodeIds.includes(episode.id.toString())
    );
    return neededData;
  } else {
    neededData = await axios
      .all([
        ...neededEpisodeIds.map((episodeId) =>
          axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
        ),
      ])
      .then((res) => {
        localStorage.setItem(
          "episodes",
          JSON.stringify([
            ...episodesFromStorage,
            ...res.map((episodeInfo) => episodeInfo.data),
          ])
        );
      })
      .then(async () => {
        return await JSON.parse(localStorage.getItem("episodes")).filter(
          (episode) => episodeIds.includes(episode.id.toString())
        );
      });
    return neededData;
  }
};
export const getEpisodeIds = (ids) => {
  if (!ids || ids.length < 1){
    return [];
  }
  return [...ids.map((episode) => episode.split("/").reverse()[0])];
};

export const fetchCharacters = async (query) => {
  const isQueryANumber=!!parseInt(query);
  if(!isQueryANumber){
    throw new Error("Query must be a number");
  }else{
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${query}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
 
};
