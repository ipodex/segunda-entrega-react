import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Ecommerce</h3>
      <div>
        <button>celulares</button>
        <button>tablets</button>
        <button>notebooks</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
