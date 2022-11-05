import "./Sidebar.scss";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/Lib/svgs/Home";
import OrdersIcon from "../../assets/Lib/svgs/Orders";
import ProductsIcon from "../../assets/Lib/svgs/Products";
import ReviewsIcon from "../../assets/Lib/svgs/Reviews";
import CheckoutIcon from "../../assets/Lib/svgs/Checkout";

const Sidebar = () => {
  const setActive = (e) => {
    document.querySelectorAll(".sidebar__link").forEach((e) => {
      e.classList.remove("sidebar__link-active");
    });
    if (e.target.matches(".sidebar__link")) {
      e.target.classList.add("sidebar__link-active");
    } else {
      e.target.parentNode.classList.add("sidebar__link-active");
    }
  };

  return (
    <div className="sidebar">
      <Link to={"/"} className="sidebar__link" onClick={(e) => setActive(e)}>
        <HomeIcon />
        <p className="sidebar__text">Главная</p>
      </Link>
      <Link
        to={"/orders"}
        className="sidebar__link"
        onClick={(e) => setActive(e)}
      >
        <OrdersIcon />
        <p className="sidebar__text">Заказы</p>
      </Link>
      <Link
        to={"/products"}
        className="sidebar__link"
        onClick={(e) => setActive(e)}
      >
        <ProductsIcon />
        <p className="sidebar__text">Товары</p>
      </Link>
      <Link
        to={"/reviews"}
        className="sidebar__link"
        onClick={(e) => setActive(e)}
      >
        <ReviewsIcon />
        <p className="sidebar__text">Отзывы</p>
      </Link>
      <Link
        to={"/checkout"}
        className="sidebar__link sidebar__link-active"
        onClick={(e) => setActive(e)}
      >
        <CheckoutIcon />
        <p className="sidebar__text">Оформить заказ</p>
      </Link>
    </div>
  );
};

export default Sidebar;
