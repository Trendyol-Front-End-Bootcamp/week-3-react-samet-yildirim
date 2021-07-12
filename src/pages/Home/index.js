import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../../components/LoadingSpinner";
const Home = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState({
    status: "",
    gender: "",
  });
  const [characters, setCharacters] = useState([]);
  const [hasMore,setHasMore]=useState(true)

  const handleChange = (e) => {
    setSortBy({ ...sortBy, [e.target.name]: e.target.value });
    setCharacters([])
    setPage(1)
  };
  useEffect(() => {
    const query = `?page=${page}${
      sortBy.status ? "&status=" + sortBy.status : ""
    }${sortBy.gender ? "&gender=" + sortBy.gender : ""}`;

    axios
      .get(`https://rickandmortyapi.com/api/character${query}`)
      .then(({ data }) => {
        setCharacters([...characters,...data.results])
        if(!data.info.next){
            setHasMore(false)
        }
      });
  }, [sortBy,page]);

  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}> Rick and Morty </h1>
      </div>
      <div className={styles.sortByWrapper}>
        <select
          className={styles.sortByWrapperSelectBox}
          name="status"
          onChange={handleChange}
        >
          <option value="">Sort by status</option>
          <option value="dead">Dead</option>
          <option value="alive">Alive</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          className={styles.sortByWrapperSelectBox}
          name="gender"
          onChange={handleChange}
        >
          <option value="">Sort by gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
        <main className={styles.main} >
          <h3 className={styles.mainTitle}>Characters <span>{`(${characters.length})`}</span></h3>
        <InfiniteScroll
            className={styles.mainScrollArea}
          dataLength={characters.length} //This is important field to render the next data
          next={()=>setPage(page+1)}
          hasMore={hasMore}
          loader={<LoadingSpinner/>}
          
        >
          {characters.map((character) => (
          <Link key={character.id} to={`/${character.id}`}>
            <CharacterCard  {...character} />
          </Link>
        ))}
        </InfiniteScroll>
        </main>
    </>
  );
};
export default Home;