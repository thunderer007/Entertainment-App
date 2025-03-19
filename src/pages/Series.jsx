import { SearchBox } from "../components";

const Series = () => {
  return (
    <section className="flex flex-col ml-4 mx-auto">
      <SearchBox placeholder={"Search for movies or TV series"} />
      <div>Series Page</div>
    </section>
  );
};

export default Series;
