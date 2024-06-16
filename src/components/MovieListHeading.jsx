import React from "react";
// import를 해야 jsx 문법을 쓸수가 있다.

const MovieListHeading = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
//export를 해야 js파일에서 import를 받아서 사용할 수 있다.
