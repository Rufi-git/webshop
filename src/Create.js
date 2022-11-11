import { useEffect, useState } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import Weight from "./Weight";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [SKU, setSku] = useState("");
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState();
  const [type, setType] = useState("Weight");
  const [type_value, setTypeValue] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { SKU, Name, Price, type, type_value };
    if (product.Name != '' && product.Price != undefined && product.type_value != '') {
      fetch(`http://rufiendpoint.atwebpages.com/main.php`, {
        method: "POST",
        body: JSON.stringify(product),
      }).then(history.push("/"));
      console.log(JSON.stringify(product));
    }
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="create">
      <form className="form" onSubmit={handleSubmit}>
        <div className="fields">
          <div className="input-field">
            <input
              type="text"
              id="sku"
              name="sku"
              className="form_input"
              autoComplete="off"
              value={SKU}
              onChange={(e) => setSku(e.target.value)}
            />
            <label for="sku" className="form_label">
              SKU
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="name"
              name="name"
              className="form_input"
              autoComplete="off"
              required="required"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="Name" className="form_label">
              Name
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="price"
              name="price"
              className="form_input"
              autoComplete="off"
              required="required"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label for="price" className="form_label">
              Price
            </label>
          </div>
          <div className="input-field input_type">
            <label for="type" className="form_label type"></label>
            <select
              className="type_select"
              value={type}
              onChange={handleChange}
            >
              <option value="weight">Weight</option>
              <option value="dimensions">Dimensions</option>
              <option value="size">Size</option>
            </select>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="weight"
              name="weight"
              className="form_input"
              autoComplete="off"
              required="required"
              value={type_value}
              onChange={(e) => setTypeValue(e.target.value)}
            />
            <label for="weight" className="form_label">
              {type}
            </label>
          </div>
        </div>
        <button className="btn_submit" onClick={handleSubmit}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Create;
