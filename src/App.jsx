import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [finalInput, setFinalInput] = useState("");
  const [movies, setMovies] = useState([
    {
      imbID: 16313,
      Poster: "../public/avengers.png",
      Title: "The Avengers",
    },
  ]);

  const handleInput = (e) => {
    e.preventDefault();
    setFinalInput(e.target.search.value);
  };

  useEffect(() => {
    if (finalInput) {
      axios
        .get("http://www.omdbapi.com/", {
          params: {
            apikey: "bd989636",
            s: finalInput,
          },
        })
        .then((res) => {
          setMovies(res.data.Search);
          console.log(finalInput);
        });
    }
  }, [finalInput]);

  return (
    <>
      <Header title="FinPro8">
        <form onSubmit={handleInput}>
          <Search
            name="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </Header>
      <div className="mt-3 p-3">
        <h2 className="mb-10 font-bold text-xl">Show your favorite movies</h2>
        <div className="flex flex-wrap gap-y-3 gap-x-5 justify-evenly sm:justify-start content-start">
          {movies.map((movie, index) => (
            <Movie key={index}>
              <Movie.Poster src={movie.Poster} />
              <Movie.Title titleMovie={movie.Title} />
            </Movie>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
