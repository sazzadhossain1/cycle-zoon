import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <div className="about-background-parent-div">
        <h1 className="shop-shop">SHOP</h1>
      </div>
      <div className="shop-parent-grid-div">
        <div className="color-1">
          <div className="shop-child-grid-div ">
            <img
              className="shop-img"
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/onzo-elite.jpg"
              alt=""
            />
            <div className="shop-text-div">
              <h2 className="cycleZoon">Cycle ZzOon</h2>
              <div className="shop-blank-div"></div>
              <p className="shop-price">$1,700</p>
              <p className="shop-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                distinctio odit vitae inventore totam? Architecto, eligendi,
                tempora sunt perspiciatis doloremque totam labore voluptatum rem
                esse fuga possimus quod unde eum incidunt assumenda eaque quia
                consequatur adipisci earum numquam reiciendis ducimus!
              </p>
              <button className="shop-btn">
                <Link>Select Option</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="color-2">
          <div className="shop-child-grid-div ">
            <div className="shop-text-div">
              <h2 className="cycleZoon">Cycle ZzOon</h2>
              <div className="shop-blank-div"></div>
              <p className="shop-price">$1,700</p>
              <p className="shop-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                distinctio odit vitae inventore totam? Architecto, eligendi,
                tempora sunt perspiciatis doloremque totam labore voluptatum rem
                esse fuga possimus quod unde eum incidunt assumenda eaque quia
                consequatur adipisci earum numquam reiciendis ducimus!
              </p>
              <button className="shop-btn">
                <Link>Select Option</Link>
              </button>
            </div>
            <img
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/product-red.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="color-3">
          <div className="shop-child-grid-div ">
            <img
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/productsdark.jpg"
              alt=""
            />
            <div className="shop-text-div">
              <h2 className="cycleZoon">Cycle ZzOon</h2>
              <div className="shop-blank-div"></div>
              <p className="shop-price">$1,700</p>
              <p className="shop-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                distinctio odit vitae inventore totam? Architecto, eligendi,
                tempora sunt perspiciatis doloremque totam labore voluptatum rem
                esse fuga possimus quod unde eum incidunt assumenda eaque quia
                consequatur adipisci earum numquam reiciendis ducimus!
              </p>
              <button className="shop-btn">
                <Link>Select Option</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
