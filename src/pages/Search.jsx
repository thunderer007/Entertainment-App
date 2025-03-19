import { SearchBox } from "../components";

const Search = () => {
  return (
    <section className="flex flex-col ml-4 mx-auto">
      <SearchBox placeholder={"Search for movies or TV series"} />
      <div>Search Page</div>
    </section>
  );
};

export default Search;
