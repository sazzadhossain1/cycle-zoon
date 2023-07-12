import "./Shop.css";
import { useLoaderData } from "react-router-dom";
import ShopDetails from "../ShopDetails/ShopDetails";

const Shop = () => {
  const shopData = useLoaderData();

  return (
    <div>
      <div className="about-background-parent-div">
        <h1 className="shop-shop">SHOP</h1>
      </div>
      <div>
        {shopData.map((data) => (
          <ShopDetails data={data} key={data.id}></ShopDetails>
        ))}
      </div>
    </div>
  );
};

export default Shop;
