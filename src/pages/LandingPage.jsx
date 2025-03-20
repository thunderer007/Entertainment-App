import { SearchBox, Trending } from "../components";

const LandingPage = () => {
  // const { data } = useFetch("/");
  // console.log(data);
  return (
    <section className="flex flex-col mx-auto ml-2 mr-2 md:mr-4 bg-amber-400">
      <SearchBox placeholder={"Search for movies or TV series"} />
      <section>
        <Trending />
      </section>
    </section>
  );
};

export default LandingPage;
