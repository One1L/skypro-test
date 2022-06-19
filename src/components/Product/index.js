import { useDispatch } from 'react-redux';
import { ReactComponent as HeartIcon } from '../../res/icons/heart.svg';
import { ReactComponent as BagIcon } from '../../res/icons/bag.svg';
import { addProduct } from '../../slices/cart';
import './styles.scss';

const currencyFormatter = Intl.NumberFormat('RU');
const Product = (product) => {
  const {imgSrc, title, desc, price} = product;
  const dispatch = useDispatch();
  return <div className="product">
    <img className="product__img" src={imgSrc} alt={title} />
    <HeartIcon className="product__add-to-fav" />
    <BagIcon className="product__add-to-cart" onClick={() => dispatch(addProduct({product}))} />
    <div className="product__title">{title}</div>
    <div className="product__desc">{desc}</div>
    <div className="product__price">{currencyFormatter.format(price)} руб.</div>
  </div>;
}

export default Product;