import "./Checkout.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "../../assets/Lib/svgs/Search";
import { useContext, useEffect, useRef, useState } from "react";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { GetData } from "../../Context/GetData";
import RenderSceleton from "../../Components/Sceleton/Sceleton";
import { GetValue } from "../../Context/GetValue";

const CheckoutPage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(1);
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(false);
  const array = useContext(GetData);
  const Loading = array[1];
  const products = array[0];
  const [, setValue] = useContext(GetValue);
  const inputRef = useRef();

  useEffect(() => {
    setData(products.slice(0, 10));
    setCount(Math.ceil(products.length / 10));
  }, [products]);

  useEffect(() => {
    setData(products.slice(page * 10 - 10, page * 10));
    if (page > 1) {
      setPrev(false);
    } else {
      setPrev(true);
    }
    if (page < count) {
      setNext(false);
    } else if (page >= count) {
      setNext(true);
    }
  }, [page, count, products]);

  const handleNextPage = () => {
    if (page < count) {
      setPage(page + 1);
    } else {
      setNext(true);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPrev(true);
    }
  };

  return (
    <div className="checkout">
      <div className="checkout__top">
        <p className="checkout__top-text">
          Заявки
          <KeyboardArrowRightIcon
            style={{ paddingBottom: "3px", color: "#BBC2D0" }}
          />
        </p>
        <p className="checkout__top-text">Оформить заказ</p>
      </div>
      <div className="checkout__top">
        <h2 className="checkout__top-title">Оформить заказ</h2>
      </div>
      <div className="checkout__input-wrapper">
        <input
          ref={inputRef}
          type="text"
          className="checkout__input"
          placeholder="Поиск по названию товара"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setValue(e.target.value);
            }
          }}
          onChange={(e) => {
            if (e.target.value === "") setValue("");
          }}
        />
        <button
          onClick={() => {
            if (inputRef.current.value.length > 2) {
              setValue(inputRef.current.value);
            }
          }}
          className="checkout__input-btn"
        >
          <SearchIcon />
        </button>
      </div>
      <div className="checkout__products-wrapper">
        <h4 className="checkout__products-title">Все товары</h4>
        <span className="checkout__products-count">({products.length})</span>
        <div className="checkout__products">
          {Loading
            ? Array.from(new Array(10)).map((e, i) => (
                <RenderSceleton key={i} />
              ))
            : data.map((e, i) => <Card key={i} data={e} />)}
        </div>
        <div className="checkout__pagination">
          <button
            disabled={prev}
            className="checkout__pagination-button"
            onClick={handlePrevPage}
          >
            <ArrowBackIosIcon />
          </button>
          <Pagination
            count={count ? count : 10}
            page={page}
            setPage={setPage}
          />
          <button
            disabled={next}
            className="checkout__pagination-button"
            onClick={handleNextPage}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
