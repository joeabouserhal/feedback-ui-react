import React from "react";
import Spinner from "../../assets/Spinner.gif";

const Loading = () => {
  return <img src={Spinner} alt="Loading..." style={{width:"30vh",margin:"auto",display:"block"}}/>;
};

export default Loading;
