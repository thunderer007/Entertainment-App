import { useFetch } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { MovieDesc } from "./index";
import { BookmarkPlusIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToBookmark } from "../features/bookmark/bookmarkSlice";

const Trending = () => {
  const { data: movies, isError } = useFetch(`/trending/all/day`);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-2xl tracking-wider text-white mb-4">Trending</h1>
      {isError && <h1>Something went wrong</h1>}
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        {movies?.results?.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <div className="md:w-[400px] md:h-[200px] overflow-hidden relative [200px] h-[100px]">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.name || movie.title}
                  className="w-full min-h-full object-fill object-center scale-125"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute bottom-10 left-4">
                <MovieDesc {...movie} />
              </div>
              <span
                className="absolute top-5 right-6 cursor-pointer"
                onClick={() => dispatch(addToBookmark(movie))}
              >
                <BookmarkPlusIcon color="#fff" />
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Trending;
