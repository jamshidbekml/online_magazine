import { Route, Switch, useHistory } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CheckoutPage from "./Pages/Checkout/Checkout";
import ProductPage from "./Pages/Product/Product";

function App() {
  let history = useHistory();
  history.push("/checkout");
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="wrapper">
          <div className="wrapper-inner">
            <Switch>
              <Route path={"/"} exact>
                Home
              </Route>
              <Route path={"/orders"}>Orders</Route>
              <Route path={"/products"}>Products</Route>
              <Route path={"/reviews"}>Reviews</Route>
              <Route path={"/checkout"} exact>
                <CheckoutPage />
              </Route>
              <Route path={"/checkout/:name"} exact>
                <ProductPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
