import { SearchBox } from "../components";

const BookmarkPage = () => {
  return (
    <section className="flex flex-col ml-4 mx-auto">
      <SearchBox placeholder={"Search for bookmarked movies and TV series"} />
      <div>Bookmark Page</div>
    </section>
  );
};

export default BookmarkPage;
