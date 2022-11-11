import { Link } from "react-router-dom";

const Navbar = ({ prodId }) => {

   const massDelete = () => {
     fetch(`http://rufiendpoint.atwebpages.com/main.php?sku=[${prodId}]`, {
       method: "DELETE",
     }).then(() => window.location.reload());
     console.log(prodId);
   };
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">Product List</Link>
        </h1>
      </div>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/create">Add</Link>
          </li>
          <li>
            <button onClick={() => massDelete()}>Mass Delete</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
