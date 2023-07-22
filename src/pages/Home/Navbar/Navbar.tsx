import "./Navbar.sass";
import logoImage from "../../../assets/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface INavbar {}

export default function Navbar(props: INavbar) {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="blue-line-part" />
        <div className="navbar-part">
          <div className="logo">
            <img src={logoImage} alt="" />
          </div>
          <div className="links-container">
            <div className="link">HAQQIMIZDA</div>
            <div className="link">XIDMƏTLƏR</div>
            <div className="link">MƏHSULLAR</div>
            <div className="link">PARTNYORLAR</div>
            <div className="link">XƏBƏRLƏR</div>
            <div className="link">ƏLAQƏ</div>
            <div className="instagram">
              <InstagramIcon />
            </div>
            <div className="language">
              RU
              <ExpandMoreIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
