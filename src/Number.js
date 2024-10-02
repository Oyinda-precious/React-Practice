import React from "react";
import { useParams } from "react-router-dom";

const Number = () => {
  let num = useParams();
  console.log(num.item);
  //to destructure
  const { item } = num;

  return <div>Number:{item}</div>;
};

export default Number;
