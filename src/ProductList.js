import { Link } from "react-router-dom";

const ProductList = ({ products, handleClick, massDelete }) => {
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
    <div className="product-list wrapper">
      <button onClick={() => massDelete()}>Mass Delete</button>
      <div className="cards container">
        {products
          .sort((a, b) => (a.SKU > b.SKU ? 1 : -1))
          .map((product) => (
            <label className="option_item" key={product.SKU}>
              <input type="checkbox" className="checkbox" onClick={()=> handleClick(product.SKU)}/>
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
  );
};

export default ProductList;
