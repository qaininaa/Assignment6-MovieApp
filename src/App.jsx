import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";
import { useReducer, useEffect } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "setInput":
      return { ...state, inputValue: action.payload };
    case "setFinalInput":
      return { ...state, finalInput: action.payload };
    case "setMovies":
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

const initialState = {
  inputValue: "",
  finalInput: "",
  movies: [
    {
      Poster: "./public/image.png",
      Title: "Avengers: Endgame",
      imdbID: "152514",
    },
  ],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    e.preventDefault();
    dispatch({ type: "setFinalInput", payload: e.target.search.value });
  };

  useEffect(() => {
    if (state.finalInput) {
      axios
        .get("http://www.omdbapi.com/", {
          params: {
            apikey: "bd989636",
            s: state.finalInput,
          },
        })
        .then((res) => {
          dispatch({ type: "setMovies", payload: res.data.Search || [] });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [state.finalInput]);

  return (
    <>
      <Header title="FinPro8">
        <form onSubmit={handleInput}>
          <Search
            name="search"
            value={state.inputValue}
            onChange={(e) =>
              dispatch({ type: "setInput", payload: e.target.value })
            }
          />
        </form>
      </Header>
      <div className="mt-3 p-3">
        <h2 className="mb-10 font-bold text-xl">Show your favorite movies</h2>
        <div className="flex flex-wrap gap-y-3 gap-x-5 justify-evenly sm:justify-start content-start">
          {state.movies.length > 0 &&
            state.movies.map((movie) => (
              <Movie key={movie.imdbID}>
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
