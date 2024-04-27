import React from "react";

const LoadMoreBtn = ({ onloadMore }) => {
  return (
    <div>
      <button type="button" onClick={onloadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
