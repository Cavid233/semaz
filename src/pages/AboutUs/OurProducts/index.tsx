import React from "react";
import ProductCard from "../../../components/UI/ProductCard";
import juiceImage from "../../../assets/juice.png";

import "./OurProducts.sass";
import { Container } from "@mui/material";

export default function OurProducts() {
  return (
    <div className="our-products">
      <div className="title">MƏHSULLARIMIZ</div>
      <div className="tools">
        <div className="sub-tools">
          <div className="tools-title">LABORATORIYA AVADANLIQLARI</div>
          <div className="tools-list">

            {/* bunlar "li" ye */}
                            
            <div className="list">Laboratuvar Mobilyaları</div>
            <div className="list">Biyoreaktör</div>
            <div className="list">Liyofilizatör</div>
            <div className="list">Biyogüvenlik Kabinleri</div>
            <div className="list">Laminar Flow Kabinleri</div>
            <div className="list">İzolatörler</div>
                            
            <div className="list">Laboratuvar Mobilyaları</div>
            <div className="list">Biyoreaktör</div>
            <div className="list">Liyofilizatör</div>
            <div className="list">Biyogüvenlik Kabinleri</div>
            <div className="list">Laminar Flow Kabinleri</div>
            <div className="list">İzolatörler</div>
                            
            <div className="list">Laboratuvar Mobilyaları</div>
            <div className="list">Biyoreaktör</div>
            <div className="list">Liyofilizatör</div>
            <div className="list">Biyogüvenlik Kabinleri</div>
            <div className="list">Laminar Flow Kabinleri</div>
            <div className="list">İzolatörler</div>


          </div>
        </div>
      </div>
      <div className="products">
        <div className="body">
            <div className="sub-body">

            <ProductCard imageSrc={juiceImage} />
            <ProductCard imageSrc={juiceImage} />
            <ProductCard imageSrc={juiceImage} />
            <ProductCard imageSrc={juiceImage} />

            <ProductCard imageSrc={juiceImage} />
            <ProductCard imageSrc={juiceImage} />
            <ProductCard imageSrc={juiceImage} />
            <ProductCard imageSrc={juiceImage} />
            </div>

        </div>
      </div>
    </div>
  );
}
