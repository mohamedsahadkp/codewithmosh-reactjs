import React from "react";

const Like = (props) => {
  let likeClassName = "fa ";
  likeClassName = props.liked
    ? (likeClassName += "fa-heart")
    : (likeClassName += "fa-heart-o");

  return <i onClick={props.onClick} className={likeClassName}></i>;
};

export default Like;
