import StyledInput from '../StyledInput';
import './styles.scss';

const CheckoutForm = ({className}) => <div className={`checkout-form ${className}`}>
  <div className="checkout-form__title">Оформление заказа</div>
  <div className="checkout-form__inputs">
    <StyledInput placeholder="Имя Фамилия" className="checkout-form__input" />
    <StyledInput placeholder="Телефон" className="checkout-form__input" />
    <StyledInput placeholder="Адрес доставки" className="checkout-form__input" />
  </div>
</div>;

export default CheckoutForm;