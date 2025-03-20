import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const customFetch = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: API_KEY },
});

export const useFetch = (url) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await customFetch.get(url);
      return response.data;
    },
  });
  return { data, isLoading, isError };
};

export default customFetch;
