import { BookmarkPlusIcon } from "lucide-react";
import { MovieDesc } from "./index";
import { useDispatch } from "react-redux";
import { addToBookmark } from "../features/bookmark/bookmarkSlice";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const bookmarkAdded = (movie) => {
    dispatch(addToBookmark(movie));
    toast.success(`${movie.name || movie.title} added to bookmarks`, {
      position: "top-right",
    });
  };
  return (
    <div className="relative">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.name || movie.title}
          className="w-72 h-56 md:w-664 md:h-52 object-fill"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mt-2">
        <MovieDesc {...movie} />
      </div>
      <span
        className="absolute top-5 right-6 cursor-pointer z-10"
        onClick={() => bookmarkAdded(movie)}
      >
        <BookmarkPlusIcon color="#fff" />
      </span>
    </div>
  );
};

export default MovieCard;
