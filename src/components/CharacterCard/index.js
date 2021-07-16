import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CharacterCardLeft from "./CharacterCardLeft";
import CharacterCardRight from "./CharacterCardRight";
const CharacterCard = ({ name, image, status, location, species, episode }) => {
  const [firstSeenIn, setFirstSeenIn] = useState("");
  const firstSeenInEpisodeId = episode[0].split("/").reverse()[0]; //Gelen url'in sonundaki id'yi alıyoruz
  useEffect(() => {
    const abortController = new AbortController();
    axios
      .get(`https://rickandmortyapi.com/api/episode/${firstSeenInEpisodeId}`)
      .then(({ data }) => setFirstSeenIn(data.name));
    return () => abortController.abort();
  }, []);

  return (
    <div className={styles.card}>
      <CharacterCardLeft name={name} image={image} />
      <CharacterCardRight
        name={name}
        status={status}
        species={species}
        lastKnownLocation={location.name}
        firstSeenIn={firstSeenIn}
      />
    </div>
  );
};
CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  species: PropTypes.string.isRequired,
  episode: PropTypes.array.isRequired,
};
export default CharacterCard;
