import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import ShopDetails from "../ShopDetails/ShopDetails";

const Shop = () => {
  const shopData = useLoaderData();

  return (
    <div>
      <div className="about-background-parent-div">
        <h1 className="shop-shop">SHOP</h1>
      </div>
      <div className="shop-parent-grid-div">
        <div>
          <img
            src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/onzo-elite.jpg"
            alt=""
          />
          <div>
            <h2>Cycle ZzOon</h2>
            <div className="shop-blank-div"></div>
            <p>$1,700</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              distinctio odit vitae inventore totam? Architecto, eligendi,
              tempora sunt perspiciatis doloremque totam labore voluptatum rem
              esse fuga possimus quod unde eum incidunt assumenda eaque quia
              consequatur adipisci earum numquam reiciendis ducimus!
            </p>
            <button>
              <Link>Select Option</Link>
            </button>
          </div>
        </div>
        <div>
          <div>
            <h2>Cycle ZzOon</h2>
            <div className="shop-blank-div"></div>
            <p>$1,700</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              distinctio odit vitae inventore totam? Architecto, eligendi,
              tempora sunt perspiciatis doloremque totam labore voluptatum rem
              esse fuga possimus quod unde eum incidunt assumenda eaque quia
              consequatur adipisci earum numquam reiciendis ducimus!
            </p>
            <button>
              <Link>Select Option</Link>
            </button>
          </div>
          <img
            src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/product-red.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/productsdark.jpg"
            alt=""
          />
          <div>
            <h2>Cycle ZzOon</h2>
            <div className="shop-blank-div"></div>
            <p>$1,700</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              distinctio odit vitae inventore totam? Architecto, eligendi,
              tempora sunt perspiciatis doloremque totam labore voluptatum rem
              esse fuga possimus quod unde eum incidunt assumenda eaque quia
              consequatur adipisci earum numquam reiciendis ducimus!
            </p>
            <button>
              <Link>Select Option</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
