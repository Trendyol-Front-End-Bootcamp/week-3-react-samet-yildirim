import styles from "./styles.module.scss";
import StatusBar from "../StatusBar";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCardLeft from "./CharacterCardLeft";
import CharacterCardRight from "./CharacterCardRight";
const CharacterCard = ({ name, image, status, location, species, episode }) => {
  const [firstSeenIn, setFirstSeenIn] = useState("");
  const firstSeenInEpisodeId = episode[0].split("/").reverse()[0]; //Gelen url'in sonundaki id'yi alıyoruz
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${firstSeenInEpisodeId}`)
      .then(({ data }) => setFirstSeenIn(data.name));
  }, []);

  return (
    <div className={styles.card}>
      <CharacterCardLeft 
        name={name} 
        image={image}
        />
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
export default CharacterCard;
