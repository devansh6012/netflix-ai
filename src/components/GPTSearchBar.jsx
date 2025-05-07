import React, { useRef, useState } from "react";
import langConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGPTSearchClick = async () => {
    const query = searchText.current.value;

    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const geminiQuery =
        "Act as a movie recommendation system and suggest some movies for the query: " +
        query +
        ". Only give me names of 5 movies comma separated like the example result given: Gaddar, Koi Mil Gaya, Don, Golmaal, Houseful";

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: geminiQuery }],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Gemini API Response:", data);

      // Extract the recommendation text
      if (
        data.candidates &&
        data.candidates[0]?.content?.parts &&
        data.candidates[0].content.parts[0]?.text
      ) {
        setRecommendations(data.candidates[0].content.parts[0].text);
        const movies = recommendations.split(",");
        console.log(movies);

        const promiseArray = movies.map((movie) => searchMovieTMDB(movie));

        const TMDBResults = await Promise.all(promiseArray);
        // console.log("results", TMDBResults);
        dispatch(addGeminiMovieResult({movieNames: movies, movieResults: TMDBResults}));
      } else {
        setRecommendations("No recommendations found");
      }
    } catch (err) {
      console.error("Error fetching recommendations:", err);
      setError(err.message || "Failed to get recommendations");
    } finally {
      setLoading(false);
    }
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="pt-[35%] md:pt-[10%] flex justify-center w-full">
        <form
          className="w-full md:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9 bg-white"
            placeholder={langConstants[langKey].GPTSearchPlaceholder}
          />
          <button
            className="py-2 px-4 m-4 cursor-pointer bg-red-700 col-span-3 text-white rounded-md flex items-center justify-center"
            onClick={handleGPTSearchClick}
            disabled={loading}
          >
            {loading ? "Loading..." : langConstants[langKey].Search}
          </button>
        </form>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default GPTSearchBar;