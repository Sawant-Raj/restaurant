import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from ".//components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/* exact position of Cart does not matter too much since we use a modal with a portal */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
