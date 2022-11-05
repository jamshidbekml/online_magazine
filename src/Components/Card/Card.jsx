import "./Card.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DiscountIcon from "../../assets/Lib/svgs/Discount";
// import ExchangeIcon from "../../assets/Lib/svgs/Exchange";
import GiftIcon from "../../assets/Lib/svgs/Gift";
import { GetProduct } from "../../Context/GetProduct";
import DateFormatter from "../../utils/formatDate";

const Card = ({ data }) => {
  const [, setProduct] = useContext(GetProduct);
  return (
    <Link
      to={`/checkout/${data.slug}`}
      style={{ textDecoration: "none" }}
      onClick={() => {
        setProduct(data);
      }}
    >
      <div className="card">
        <div className="card-icons">
          {/* <span className="card-icon">
          <ExchangeIcon />
        </span> */}
          <span className="card-icon">
            <GiftIcon />
          </span>
          <span className="card-icon">
            <DiscountIcon />
          </span>
        </div>
        <img
          className="card-img"
          src={data.img}
          alt={data.name}
          width={168}
          height={160}
        />
        <div className="card-body">
          <h3 className="card-title">{data.name}</h3>
          <p className="card-price">{data.current_price_formatted}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="card-body__text">
              {DateFormatter(data.installment_prices[2].current_price)}
            </p>
            <span className="card-body__duration">
              х{data.installment_prices[2].duration}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
