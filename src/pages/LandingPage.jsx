import { SearchBox } from "../components";
import { useFetch } from "../utils";

const LandingPage = () => {
  const { data } = useFetch("/");
  console.log(data);
  return (
    <section className="flex flex-col ml-4 mx-auto">
      <SearchBox placeholder={"Search for movies or TV series"} />
      <div>LandingPage</div>
    </section>
  );
};

export default LandingPage;
