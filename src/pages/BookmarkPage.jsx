import { useDispatch, useSelector } from "react-redux";
import { MovieDesc, SearchBox } from "../components/index";
import { BookmarkMinusIcon } from "lucide-react";
import { removeFromBookmark } from "../features/bookmark/bookmarkSlice";
import { useState } from "react";
import { toast } from "react-toastify";

const BookmarkPage = () => {
  const bookmarks = useSelector((state) => state.bookmarkState.bookmarks);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBookmarks = bookmarks.filter((bookmark) =>
    (bookmark.name || bookmark.title || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleRemoveFromBookmark = (bookmark) => {
    dispatch(removeFromBookmark(bookmark));
    toast.warning(
      `${bookmark.name || bookmark.title} removed from bookmarks!`,
      {
        position: "top-right",
      }
    );
  };

  return (
    <section className="flex flex-col ml-4 mx-auto min-h-[100vh]">
      <SearchBox
        placeholder={"Search for bookmarked movies and TV series"}
        value={searchTerm}
        onChange={handleSubmit}
      />
      {filteredBookmarks.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1.5 gap-y-4 md:gap-y-6">
          {filteredBookmarks.map((bookmark) => {
            return (
              <div key={bookmark.id} className="flex flex-col relative">
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
                <span
                  className="absolute top-5 right-6 lg:right-14 cursor-pointer z-10"
                  onClick={() => handleRemoveFromBookmark(bookmark)}
                >
                  <BookmarkMinusIcon color="#fff" />
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl text-white">
            Sowie! You have no bookmarks :(
          </h2>
        </div>
      )}
    </section>
  );
};

export default BookmarkPage;
