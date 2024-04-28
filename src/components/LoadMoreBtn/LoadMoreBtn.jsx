import React from "react";
import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onloadMore }) => {
  return (
    <div>
      <button className={css.buttonClose} type="button" onClick={onloadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
