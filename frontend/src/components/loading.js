import React from "react";
const loadingImg =
    "https://cdn.dribbble.com/users/588886/screenshots/6086023/carnival.gif"
  /*"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";*/

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
