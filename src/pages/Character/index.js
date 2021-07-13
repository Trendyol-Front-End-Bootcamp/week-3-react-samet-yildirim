import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import StatusBar from "../../components/StatusBar";
import BackButton from "../../components/Buttons/BackButton";
const Character = () => {
  const history = useHistory();
  const { id } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    image: "",
    status: "",
    species: "",
    location: { name: "" },
    episode: [],
  });
  const [episodeInfos, setEpisodeInfos] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => setCharacter(data))
      .catch(() => history.push("/404"));
  }, [id]);
  useEffect(() => {
    if (character.episode) {
      axios
        .all([...character.episode.map((episode) => axios.get(episode))])
        .then((res) => setEpisodeInfos(res.map((episode) => episode.data)));
    }
  }, [character]);
  return (
    <div className={styles.character}>
      <BackButton />
      <h3 className={styles.characterTitle}>{character.name}</h3>
      <img
        className={styles.characterImg}
        src={character.image}
        alt={character.name}
      />
      <div className={styles.characterStatus}>
        <StatusBar status={character.status} /> {character.status} -{" "}
        {character.species}
      </div>
      {/* <p className={styles.characterLocation}>{character.location.name}</p> */}
      <div className={styles.characterEpisodes}>
        <h3>Episodes:</h3>
        {episodeInfos.map((episode, index) => (
          <p key={index} className={styles.characterEpisodesEpisode}>
            {index + 1}: {episode.name} - <span>{episode.air_date}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
export default Character;
