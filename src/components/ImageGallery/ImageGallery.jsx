import React from "react";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {Array.isArray(photos) &&
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
