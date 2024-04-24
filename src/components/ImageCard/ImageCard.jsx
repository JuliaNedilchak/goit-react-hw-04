import React from "react";

const ImageCard = ({ photo }) => {
  return (
    <div>
      <img src={photo.urls.small} alt="" />
    </div>
  );
};

export default ImageCard;
