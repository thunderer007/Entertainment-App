import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const customFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export const useFetch = (url) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await customFetch.get(url);
      return response.data;
    },
  });
  return { data, isLoading, isError };
};

export default customFetch;
