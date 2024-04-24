import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      <li>
        {photos.map((photo) => {
          return <ImageCard key={photo.id} src={photo.urls.small} />;
        })}
      </li>
    </ul>
  );
};

export default ImageGallery;
