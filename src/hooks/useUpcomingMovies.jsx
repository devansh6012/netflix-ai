import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies = () => {
  // Fetch data from tmdb API and update store
  const dispatch = useDispatch();

  const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

  useEffect(() => {
    !upcomingMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log("popular", json.results);
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
