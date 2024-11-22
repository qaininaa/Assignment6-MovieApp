import { useState } from "react";

const Search = (props) => {
  const { value, onChange = () => {}, name } = props;
  const [focus, setFocus] = useState(false);

  return (
    <div className="flex gap-2 w-full justify-center sm:w-80 sm:justify-end">
      <div className="relative inline-block">
        <input
          type="text"
          name={name}
          value={value}
          id="search"
          placeholder="Search"
          className={`flex rounded py-1 px-5 h-full sm:px-8 ${
            focus ? "outline-2 outline-sky-900" : ""
          }`}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={onChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#0c4a6e"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <h1
          className={`bg-white text-sm sm:hidden font-bold text-primary ${
            focus || value !== ""
              ? "hidden"
              : "absolute left-2 top-1/2 transform -translate-y-1/2"
          }`}
        >
          FinroPro8
        </h1>
      </div>
      <button
        type="submit"
        className=" bg-slate-700 text-white p-2 rounded hover:opacity-70"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
