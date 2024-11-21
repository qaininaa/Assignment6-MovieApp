const Movie = (props) => {
  const { children } = props;

  return <div className="border-2 border-sky-900 w-44 h-52">{children}</div>;
};

const Poster = ({ src }) => {
  return (
    <div className="w-full h-3/4">
      <img
        src={src}
        alt="Poster Movie"
        className="object-cover h-full w-full"
      />
    </div>
  );
};

const Title = ({ titleMovie }) => {
  return (
    <div className="flex items-center justify-center text-center bg-sky-900 text-white font-semibold h-1/4">
      <h2 className="text-sm">{titleMovie}</h2>
    </div>
  );
};

Movie.Poster = Poster;
Movie.Title = Title;

export default Movie;
