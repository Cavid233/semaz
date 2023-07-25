import "./ProductCard.sass";

interface IProductCard {
  imageSrc: string;
}

export default function ProductCard(props: IProductCard) {
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={props.imageSrc} alt="" />
      </div>
      <div className="product-title">Et Ceken Masin</div>
      <div className="product-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
}
