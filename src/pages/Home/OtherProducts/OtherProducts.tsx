import "./OtherProducts.sass";
import grinderImage from "../../../assets/grinder.png";
import juiceImage from "../../../assets/juice.png";
import { Container } from "@mui/system";
interface IOtherProducts { }

export default function OtherProducts(props: IOtherProducts) {
  return (
    <div className="other-products">
        <div className="title-container" >
          <div className="title">DIGƏR MƏHSULLAR</div>
        </div>
        <div className="body">
          <div className="product-card">
            <div className="img-wrapper">
              <img src={juiceImage} alt="" />
            </div>
            <div className="product-title">Et Ceken Masin</div>
            <div className="product-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="product-card">
            <div className="img-wrapper">
              <img src={juiceImage} alt="" />
            </div>
            <div className="product-title">Et Ceken Masin</div>
            <div className="product-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="product-card">
            <div className="img-wrapper">
              <img src={juiceImage} alt="" />
            </div>
            <div className="product-title">Et Ceken Masin</div>
            <div className="product-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="product-card">
            <div className="img-wrapper">
              <img src={juiceImage} alt="" />
            </div>
            <div className="product-title">Et Ceken Masin</div>
            <div className="product-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

        </div>
    </div>
  );
}
