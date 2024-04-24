import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard/ImageCard";
import axios from "axios";
import Loader from "../src/components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [photos, setphotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPhoto() {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://api.unsplash.com/photos/?client_id=rtxS2o_3Pq5jhEZNKWgvQxcGcFMaWJGb1oZei-ws2CE"
      );
      console.log(data);
      setphotos(data);
      setIsLoading(false);
    }
    fetchPhoto();
  }, []);

  return (
    <>
      <SearchBar />
      <div>
        <hi>Images for you</hi>
        {isLoading && <Loader />}
        <ul>
          {photos !== null &&
            photos.map((photo) => {
              return (
                <li key={photo.id}>
                  <img src={photo.urls.small} alt={photo.alt_description} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default App;
