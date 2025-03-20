import { FilmIcon, TvMinimalPlayIcon } from "lucide-react";

const MovieDesc = ({
  release_date,
  name,
  title,
  media_type,
  first_air_date,
}) => {
  return (
    <div className="text-white">
      <ul className="flex gap-x-2 text-xs text-white">
        <li>
          <span>{release_date || first_air_date}</span>
        </li>
        <li>
          {media_type === "movie" ? (
            <span className="flex gap-x-1">
              Movie
              <FilmIcon size={18} />
            </span>
          ) : (
            <span className="flex gap-x-1">
              Tv <TvMinimalPlayIcon size={18} />
            </span>
          )}
        </li>
        <li>PG</li>
      </ul>
      <h3 className="font-bold">{name || title}</h3>
    </div>
  );
};

export default MovieDesc;
