import "./Product.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { GetProduct } from "../../Context/GetProduct";
import Slider from "react-slick";
import { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import DateFormatter from "../../utils/formatDate";
import ExchangeIcon from "../../assets/Lib/svgs/Exchange";
import Checkbox from "@mui/material/Checkbox";
import GiftIcon from "../../assets/Lib/svgs/Gift";
import DiscountIcon from "../../assets/Lib/svgs/Discount";
import DistcountIphoneIcon from "../../assets/Lib/svgs/DIscountIphone";
import CheckoutIcon from "../../assets/Lib/svgs/Checkout";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

const ProductPage = () => {
  const [product] = useContext(GetProduct);
  const [priceIndex, setPriceIndex] = useState(0);
  const { name } = useParams();
  const [checked, setChecked] = useState(true);

  const setDuration = (e) => {
    setPriceIndex(e.target.value);
    document.querySelectorAll(".product__buttons").forEach((e) => {
      e.classList.remove("product__buttons-active");
    });

    e.target.classList.add("product__buttons-active");
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="product">
      <div className="product__top">
        <p className="checkout__top-text">
          Заявки
          <KeyboardArrowRightIcon
            style={{ paddingBottom: "3px", color: "#BBC2D0" }}
          />
          <Link to={"/checkout"} className="product__link">
            Оформить заказ
          </Link>
          <KeyboardArrowRightIcon
            style={{ paddingBottom: "3px", color: "#BBC2D0" }}
          />
        </p>
        <Link
          to={`/checkout/${product.slug}`}
          className="checkout__top-text product__link"
        >
          {product.name}
        </Link>
      </div>
      <div className="product__content">
        <span className="product__content-icon">
          <CheckoutIcon />
        </span>
        <h2 className="product__content-title">{product.name}</h2>
        <div className="product__content-wrapper">
          <div className="product__content-left">
            <ul className="product__icons-list">
              <li className="product__icons-item">
                <ExchangeIcon />
              </li>
              <li className="product__icons-item">
                <GiftIcon />
              </li>
              <li className="product__icons-item">
                <DiscountIcon />
              </li>
              <li className="product__icons-item">
                <DistcountIphoneIcon />
              </li>
            </ul>
            <Slider className="product__carousel" {...settings}>
              {product && product.length > 15
                ? product.gallery
                    .slice(0, 15)
                    .map((e, i) => (
                      <img
                        key={i}
                        className="product__images"
                        src={e.original}
                        alt="product_image"
                        width={480}
                        height={380}
                      />
                    ))
                : product.gallery.map((e, i) => (
                    <img
                      key={i}
                      className="product__images"
                      src={e.original}
                      alt="product_image"
                      width={271}
                      height={271}
                    />
                  ))}
            </Slider>
          </div>
          <div className="product__content-right">
            <div className="product__content-right-top">
              <h4 className="product__type">Цена телефона</h4>
              <p className="product__price">
                {product.current_price_formatted}
              </p>
            </div>
            <div className="product__content-right-duration">
              <h4 className="product__type">Общая цена (с наценкой)</h4>
              <div className="product__prices">
                <p className="product__prices-current">
                  {
                    product.installment_prices[priceIndex]
                      .current_price_formatted
                  }
                </p>
                <div className="product__prices-monthly-wrapper">
                  <p className="product__prices-monthly">
                    {DateFormatter(
                      product.installment_prices[priceIndex].current_price,
                      product.installment_prices[priceIndex].duration
                    )}
                  </p>
                  <span className="product__prices-monthly-duration">
                    x{product.installment_prices[priceIndex].duration}
                  </span>
                </div>
              </div>
              <ul className="product__buttons-list">
                <li
                  onClick={(e) => setDuration(e)}
                  value={0}
                  style={{
                    width: `${100 / 3}%`,
                  }}
                  className="product__buttons product__buttons-active"
                >
                  3 мес
                </li>
                <li
                  onClick={(e) => setDuration(e)}
                  value={1}
                  style={{
                    width: `${100 / 3}%`,
                  }}
                  className="product__buttons"
                >
                  6 мес
                </li>
                <li
                  onClick={(e) => setDuration(e)}
                  value={2}
                  style={{
                    width: `${100 / 3}%`,
                  }}
                  className="product__buttons"
                >
                  12 мес
                </li>
              </ul>
              <p className="product__percent">
                Наценка: <span>5%</span>
              </p>
            </div>
            <div className="product__content-right-character">
              <h4 className="product__type">Цена телефона</h4>
              <p className="product__content-right-character-text">
                Тип: моноблок (классический)
              </p>
              <p className="product__content-right-character-text">
                Стандарт: 2G, 3G, 4G (LTE), 5G
              </p>
              <p className="product__content-right-character-text">
                Операционная система: iOS 14
              </p>
            </div>
            <div className="product__bottom">
              <Link className="product__bottom-link" to={`/checkout/${name}`}>
                Показать все
              </Link>
              <KeyboardArrowRightIcon style={{ fill: "#00c48c" }} />
            </div>
          </div>
        </div>
        <div className="product__order">
          <h4 className="product__order-title">Акции</h4>
          <ul className="product__order-list">
            <li className="product__order-item">
              <div className="product__order-item-left">
                <span className="product__order-icon">
                  <ExchangeIcon />
                </span>
                <div>
                  <p className="product__order-text">
                    Обменяй свой старый айфон и получи скидку на новый
                  </p>
                  <p className="product__order-text">- 400 000 сум</p>
                </div>
              </div>
              <Checkbox
                {...label}
                style={{ color: "#00c48c" }}
                inputProps={{ "aria-label": "controlled" }}
              />
            </li>
            <li className="product__order-item">
              <div className="product__order-item-left">
                <span className="product__order-icon">
                  <GiftIcon />
                </span>
                <div>
                  <p className="product__order-text">
                    Обменяй свой старый айфон и получи скидку на новый
                  </p>
                  <p className="product__order-text">- 400 000 сум</p>
                </div>
              </div>
              <Checkbox
                {...label}
                defaultChecked
                style={{ color: "#00c48c" }}
                inputProps={{ "aria-label": "controlled" }}
              />
            </li>
            <li className="product__order-item">
              <div className="product__order-item-left">
                <span className="product__order-icon">
                  <DiscountIcon />
                </span>
                <div>
                  <p className="product__order-text">
                    Обменяй свой старый айфон и получи скидку на новый
                  </p>
                  <p className="product__order-text">- 400 000 сум</p>
                </div>
              </div>
              <Checkbox
                {...label}
                defaultChecked
                style={{ color: "#00c48c" }}
                inputProps={{ "aria-label": "controlled" }}
              />
            </li>
            <li className="product__order-item">
              <div className="product__order-item-left">
                <span className="product__order-icon">
                  <DistcountIphoneIcon />
                </span>
                <div>
                  <p className="product__order-text">
                    Обменяй свой старый айфон и получи скидку на новый
                  </p>
                  <p className="product__order-text">- 400 000 сум</p>
                </div>
              </div>
              <Checkbox
                {...label}
                defaultChecked
                style={{ color: "#00c48c" }}
                inputProps={{ "aria-label": "controlled" }}
              />
            </li>
            <li className="product__order-item">
              <button className="product__order-button">
                Добавить в корзину
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
