import React, { useEffect, useState } from "react";

const Product = () => {
  const [show, SetShow] = useState(false);
  const [input, setInput] = useState("");
  //    useEffect( function, dependency)

  useEffect(() => {
    console.log("useeffect show");
    alert(show);
    console.log(localStorage.getItem("name"));
    let detail = localStorage.getItem("name");
    console.log(detail);
  }, [show]);

  useEffect(() => {
    // console.log("useeffect input");
    // alert(input);
  }, [input]);

  console.log("component has rendered");

  function handleClick() {
    console.log("button clicked");
    localStorage.setItem("name", input);
    SetShow(!show);
  }

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={handleClick}> submit </button>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
      />
    </>
  );
};

export default Product;
