import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img className="h-screen w-full object-cover" src={BG_IMG} alt="background" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;