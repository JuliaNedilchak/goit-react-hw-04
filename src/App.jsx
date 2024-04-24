import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard/ImageCard";

import Loader from "../src/components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { photoRequest } from "../src/api";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  console.log(query);
  const onSearchQuery = (photoSearch) => {
    setQuery(photoSearch);
  };
  useEffect(() => {
    async function fetchPhoto() {
      try {
        setIsLoading(true);
        const data = await photoRequest();

        setPhotos(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhoto();
  }, []);

  return (
    <>
      <SearchBar onSearchQuery={onSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <div>
        <h1>Images for you</h1>
        {photos && <ImageGallery photos={photos} />}
      </div>
    </>
  );
};

export default App;
