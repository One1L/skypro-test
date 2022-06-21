import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import ProductInCart from '../components/ProudctInCart';
import Button from '../components/Button';
import CheckoutForm from '../components/CheckoutForm';
import { clearCart } from '../slices/cart';
import './cart.scss';

const Cart = () => {
  const products = useSelector(state => state.cart.products);
  const [counts, setCounts] = useState(
    products.reduce((acc, {id, minCount}) => ({...acc, [id]: minCount}), {})
  );
  const totalPrice = products.reduce((acc, {id, price}) => acc + price * counts[id], 0);
  const dispatch = useDispatch();
  return <div className="cart-page">
    <Header />
    <div className="cart-page__content">
      <div className="cart-page__left">
        <div className="cart-page__header">
          <div className="cart-page__product-title">Товар</div>
          <div className="cart-page__count">К-во</div>
        </div>
        <div className="cart-page__products">
          {products.map((product) => <ProductInCart
            {...product} key={product.id}
            onCountChange={count => setCounts({...counts, [product.id]: count})}
          />)}
        </div>
        <Button theme="light"
          className="cart-page__clear-cart cart-page__button"
          onClick={() => dispatch(clearCart())}
        >
          Очистить корзину
        </Button>
        <Button theme="dark" className="cart-page__button">Продолжить покупки</Button>
      </div>
      <CheckoutForm className="cart-page__right" totalPrice={totalPrice} />
    </div>
  </div>;
};

export default Cart;