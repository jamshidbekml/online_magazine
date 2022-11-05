import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { GetValue } from "./GetValue";
import axios from "axios";

const GetData = createContext();

const Data = ({ children }) => {
  const search = useContext(GetValue)[0];
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      if (search.length >= 3) {
        setLoading(true);
        let { data } = await axios.get(
          `https://api.radius.uz/api/v2/search?search=${search}&type=products`
        );
        return (
          setProducts(
            data.data.filter((e) => e.slug != null && e.name != null)
          ),
          setLoading(false)
        );
      } else {
        setLoading(true);
        let { data } = await axios.get(
          "https://api.radius.uz/api/v2/products?page=1&category_id=36&order_by=views&order_direction=desc&price_from=0&price_to=22999000"
        );

        return (
          setProducts(
            data.data.filter((e) => e.slug != null && e.name != null)
          ),
          setLoading(false)
        );
      }
    }
    fetchData();
  }, [search]);

  return (
    <GetData.Provider value={[products, loading]}>{children}</GetData.Provider>
  );
};

export { GetData, Data };
