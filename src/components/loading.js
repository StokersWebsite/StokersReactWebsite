import React from "react";
const loadingImg =
"https://c.tenor.com/FTy6NfIh0vkAAAAC/confetti-lamme.gif"

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
