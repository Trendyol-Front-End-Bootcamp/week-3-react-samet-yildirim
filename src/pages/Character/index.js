import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import StatusBar from "../../components/StatusBar";
import BackButton from "../../components/Buttons/BackButton";
import { useLoading } from "../../contexts/Loading";
import Loading from "../../components/Loading";
import { getEpisodesFromLocalStorage } from "../../utils";

const Character = () => {
  const { loading, setLoading } = useLoading();
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
    //Set character
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => setCharacter(data))
      .catch(() => history.push("/404"))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const getEpisodeIds = (ids) => {
    return [...ids.map((episode) => episode.split("/").reverse()[0])];
  };
  useEffect(() => {
    getEpisodesFromLocalStorage(getEpisodeIds(character.episode)).then((res) =>
      setEpisodeInfos(res)
    );
  }, [character]);
  useEffect(() => {
    console.log("infos", episodeInfos);
  }, [episodeInfos]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
          <div className={styles.characterEpisodes}>
            <h3>Episodes:</h3>
            {episodeInfos.map((episode, index) => (
              <p key={index} className={styles.characterEpisodesEpisode}>
                {index + 1}: {episode.name} - <span>{episode.air_date}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Character;
