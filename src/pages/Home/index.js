import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import CharacterCard from "../../components/CharacterCard";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../../components/LoadingSpinner";
import SelectBox from "../../components/SelectBox";
import { fetchCharacters } from "../../utils";
const Home = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState({
    status: "",
    gender: "",
  });
  const [characters, setCharacters] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const handleChange = (e) => {
    setSortBy({ ...sortBy, [e.target.name]: e.target.value });
    //When query change, we need to clear the characters before we fetch the new ones.
    setCharacters([]);
    //Set the page 1 so infinite scroll starts again.
    setPage(1);
  };
  useEffect(() => {
    const abortController = new AbortController();

    //Genarates query string for search params
    const query = `?page=${page}${
      sortBy.status ? "&status=" + sortBy.status : ""
    }${sortBy.gender ? "&gender=" + sortBy.gender : ""}`;

    fetchCharacters(query).then((data) => {
      setCharacters([...characters, ...data.results]);
      if (!data.info.next) {
        //If there is no more item in the api, set hasMore state false for stop infinite scroll
        setHasMore(false);
      }
    });

    return () => abortController.abort();
  }, [sortBy, page]);

  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}> Rick and Morty </h1>
      </div>
      <div className={styles.sortByWrapper}>
        <SelectBox
          className={styles.sortByWrapperSelectBox}
          name="status"
          selectDescription="Sort by status"
          onChange={handleChange}
          options={[
            {
              value: "dead",
              text: "Dead",
            },
            {
              value: "alive",
              text: "Alive",
            },
            {
              value: "unknown",
              text: "Unknown",
            },
          ]}
        />
        <SelectBox
          className={styles.sortByWrapperSelectBox}
          name="gender"
          selectDescription="Sort by gender"
          onChange={handleChange}
          options={[
            {
              value: "male",
              text: "Male",
            },
            {
              value: "female",
              text: "Female",
            },
            {
              value: "genderless",
              text: "Genderless",
            },
            {
              value: "unknown",
              text: "Unknown",
            },
          ]}
        />
      </div>
      <main className={styles.main}>
        <h3 className={styles.mainTitle}>
          Characters <span>{`(${characters.length})`}</span>
        </h3>
        <InfiniteScroll
          className={styles.mainScrollArea}
          dataLength={characters.length}
          next={() => setPage(page + 1)}
          hasMore={hasMore}
          loader={<LoadingSpinner position={"absolute"} />}
        >
          {characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </InfiniteScroll>
      </main>
    </>
  );
};
export default Home;
