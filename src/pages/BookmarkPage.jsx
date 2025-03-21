import { useSelector } from "react-redux";
import { SearchBox } from "../components";
import { MovieDesc } from "../components/index";
import { BookmarkMinusIcon } from "lucide-react";

const BookmarkPage = () => {
  const bookmarks = useSelector((state) => state.bookmarkState.bookmarks);

  return (
    <section className="flex flex-col ml-4 mx-auto min-h-[100vh]">
      <SearchBox placeholder={"Search for bookmarked movies and TV series"} />
      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1.5 gap-y-4 md:gap-y-6">
          {bookmarks.map((bookmark) => {
            return (
              <div className="flex flex-col relative">
                <div className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${bookmark.poster_path}`}
                    alt={bookmark.name || bookmark.title}
                    className="w-72 h-56 md:w-64 md:h-52 object-fill"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-2">
                  <MovieDesc {...bookmark} />
                </div>
                <span className="absolute top-5 right-6 lg:right-14 cursor-pointer z-10">
                  <BookmarkMinusIcon color="#fff" />
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h2>Sowie! you have no bookmark</h2>
        </div>
      )}
    </section>
  );
};

export default BookmarkPage;
