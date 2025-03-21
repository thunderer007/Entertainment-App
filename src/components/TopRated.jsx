import { useFetch } from "../utils";
import { MovieCard } from "./index";

const TopRated = () => {
  const { data: movies } = useFetch("/movie/top_rated?language=en-US&page=1");
  // console.log(movies);
  return (
    <section>
      <h1 className="text-2xl tracking-wider text-white mb-3 md:mt-6">
        Top Rated Movies for you
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1.5 gap-y-4 md:gap-y-6">
        {movies?.results.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </section>
  );
};

export default TopRated;
