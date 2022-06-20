import { useDispatch } from 'react-redux';
import { removeProduct } from '../../slices/cart';
import ProductCounter from '../ProductCounter';
import './styles.scss';

const currencyFormatter = Intl.NumberFormat('RU');
const ProductInCart = ({id, imgSrc, title, desc, price, minCount, maxCount}) => {
  const dispatch = useDispatch();
  return <div className="product-in-cart">
    <img className="product-in-cart__img" src={imgSrc} alt={title} />
    <div className="product-in-cart__content">
      <div className="product-in-cart__title">{title}</div>
      <div className="product-in-cart__desc">{desc}</div>
      <div className="product-in-cart__price">{currencyFormatter.format(price)} руб.</div>
      <span className="product-in-cart__add-to-fav">Избранные</span>
      <span className="product-in-cart__remove-from-cart"
        onClick={() => dispatch(removeProduct({productId: id}))}
      >
        Удалить
      </span>
    </div>
    <ProductCounter className="product-in-cart__counter" min={minCount} max={maxCount} />
  </div>
};

export default ProductInCart;