import './styles.scss';

const currencyFormatter = Intl.NumberFormat('RU');
const Product = ({id, imgSrc, title, desc, price}) => <div className="product">
  <img className="product__img" src={imgSrc} alt={title} />
  <div className="product__title">{title}</div>
  <div className="product__desc">{desc}</div>
  <div className="product__price">{currencyFormatter.format(price)} руб.</div>
</div>;

export default Product;