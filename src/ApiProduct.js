import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ApiProduct = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((data) => {
        //we can also use response instead of data, like response.data as well.
        console.log(data.data);
        setproducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setproducts(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  return (
    <>
      <div>Fetching from an API</div>
      {products.length === 0 ? (
        // <div>Loading....</div>
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      ) : (
        <div>
          {products.map((item, index) => (
            <div className="card" key={index}>
              <div className="container">
                <h1>Title:{item.title}</h1>
                <h1>Description:{item.description}</h1>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ApiProduct;
