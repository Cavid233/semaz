import "./HeroBanner.sass";
import grinderImage from "../../../assets/grinder.png";
import juiceMachineImage from "../../../assets/juice.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
interface IHeroBanner { }

export default function HeroBanner(props: IHeroBanner) {
  return (
    <div className="hero-banner">
      <div className="title-container">
        <div className="sub-title-container">
          <span className="main-text">LABORATORYA AVANDANLIQLARI</span>
          <ArrowForwardIosIcon
            style={{
              color: "#205fac",
              fontSize: "15px",
              marginLeft: "3px",
              marginRight: "3px",
            }}
          />
          <span className="detail-text"> LOREM İMPSUM DOL</span>
        </div>

      </div>
      <div className="banner-container">
        <div className="img-wrapper-container">
          <img src={juiceMachineImage} alt="" />
        </div>

        <div className="text-box-container">
          <div className="text-box">
            <div className="text-box-title">LABORATORIYA AVADANLIĞI</div>
            <div className="text-box-description">
              LOREM İMPSUM DOL hello world{" "}
            </div>
            <div className="text-box-details">
              <div>Ölçüləri</div>
              <div>150 x 540sm</div>
            </div>
            <div className="text-box-details">
              <div>Rəngi</div>
              <div>Ağ</div>
            </div>
            <div className="text-box-details">
              <div>Gücü</div>
              <div>2500 w</div>
            </div>
            <div className="text-box-details">
              <div>Xüsusiyyətləri</div>
              <div>Lorem ipsum dol</div>
            </div>
            <div className="text-box-details">
              <div>Digər</div>
              <div>Lorem ipsum</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
