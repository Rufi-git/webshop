import ProductList from "./ProductList";
import useFetch from "./useFetch";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Home = (props) => {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("http://rufiendpoint.atwebpages.com/main.php");

  const [ids, setIds] = useState([]);
  const data = [];
  const handleClick = (id) => {
    const newProduct = products.filter((product) => product.SKU === id);
    newProduct.map((product) => {
      var index = ids.indexOf(product.SKU);
      console.log(index);
      index != -1 ? ids.splice(index, 1) : ids.push(product.SKU);
    });
    console.log(ids);
    props.setProdId(ids);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "Size":
        return "Mb";
      case "Weight":
        return "Kg";
      default:
        return "";
    }
  };
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {products && (
        <div className="product-list wrapper">
          <div className="cards container">
            {products
              .sort((a, b) => (a.SKU > b.SKU ? 1 : -1))
              .map((product) => (
                <label className="option_item" key={product.SKU}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={() => handleClick(product.SKU)}
                  />
                  <div className="option_inner">
                    <div className="tickmark"></div>
                    <h2>SKU: {product.SKU}</h2>
                    <h2>Name: {product.name}</h2>
                    <h2>Price: {product.price}</h2>
                    <h2>
                      {product.type} {product.typeValue}{" "}
                      {renderSwitch(product.type)}
                    </h2>
                  </div>
                </label>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
