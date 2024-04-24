import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {photos !== null &&
        photos.map((photo) => {
          return (
            <li key={photo.id}>
              <img
                width={250}
                height={200}
                src={photo.urls.small}
                alt={photo.alt_description}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
