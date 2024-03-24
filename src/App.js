import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from ".//components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Fragment>
      {/* exact position of Cart does not matter too much since we use a modal with a portal */}
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
