import "./Footer.sass";
import { Container } from "@mui/material";
import logoImage from "../../assets/logo.png";

interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <div className="footer">
      <div>
        <hr className="divider" />
      </div>
      <div className="body">
        <div className="data">
          <div>
            <div className="image-wrapper">
              <img src={logoImage} alt="" />
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, nulla id! Ipsum dolorem eveniet impedit.
            </div>
          </div>
        </div>
        <div className="data">
          <div>
            <div className="title">KEÇİDLƏR</div>
            <div className="text">XİDMƏTLƏR</div>
            <div className="text">MƏHSULLAR</div>
            <div className="text">PARTNYORLAR</div>
            <div className="text">XƏBƏRLƏR</div>
          </div>
        </div>
        <div className="data">
          <div>
            <div className="title">ƏLAQƏ MƏLUMATLARI</div>
            <div className="text">+994 12 310 83 63</div>
            <div className="text">office@sem-az.net</div>
          </div>
        </div>
      </div>

      <div className="blue-line">
        <div className="blue-line-title">
          SEM-AZ 2023 © Bütün hüquqlar qorunur.
        </div>
      </div>
    </div>
  );
}
