import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navcontainer">
      <h4>THE MOTORCYCLE</h4>
      <ul>
        <li>Inicio</li>
        <li>Naked</li>
        <li>Deportivas</li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
