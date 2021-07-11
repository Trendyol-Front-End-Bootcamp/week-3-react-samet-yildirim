import styles from "./styles.module.scss";
import StatusBar from "../StatusBar";
import { useEffect, useState } from "react";
import axios from "axios";
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
      <div className={styles.cardLeft}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.cardRight}>
        <h3 className={styles.cardRightTitle}>{name}</h3>
        <p className={styles.cardRightStatus}>
          <StatusBar status={status} />
          {status} - {species}
        </p>
        <p className={styles.cardRightLightText}>Last known location:</p>
        <p>{location.name}</p>
        <p className={styles.cardRightLightText}>First seen in:</p>
        <p>{firstSeenIn}</p>
      </div>
    </div>
  );
};
export default CharacterCard;
