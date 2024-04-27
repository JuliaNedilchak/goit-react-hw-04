import React, { useEffect, useState } from "react";

import Loader from "../src/components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { photoRequestSearch } from "../src/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  console.log(query);

  //useEffect(() => {
  //async function fetchPhoto() {
  // try {
  // setIsLoading(true);
  //const data = await photoRequest();

  //setPhotos(data);
  //} catch (error) {
  //setIsError(true);
  //} finally {
  //setIsLoading(false);
  //}
  //}
  //fetchPhoto();
  //}, []);

  useEffect(() => {
    if (query.length === 0) return;
    async function fetchPhotoSearch() {
      try {
        setIsLoading(true);
        const data = await photoRequestSearch(query, page);
        if (page === 1) {
          setPhotos(data);
        } else {
          setPhotos((prevPhotos) => [...prevPhotos, ...data]);
          onloadMore();
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotoSearch();
  }, [query, page]);

  const onloadMore = () => {
    setPage((prevPage) => {
      prevPage + 1;
    });
  };
  const onSearchQuery = (photoSearch) => {
    setQuery(photoSearch);
    setPage(1);
  };
  return (
    <>
      <SearchBar onSearchQuery={onSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <div>
        <h1>Images for you</h1>
        {photos && <ImageGallery photos={photos} />}
        {photos && <LoadMoreBtn onloadMore={onloadMore} />}
      </div>
    </>
  );
};

export default App;
