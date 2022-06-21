import React from 'react';
import { IMaskInput } from 'react-imask';
import Button from '../Button';
import StyledInput from '../StyledInput';
import './styles.scss';

const currencyFormatter = Intl.NumberFormat('RU');
const MaskedPhoneInput = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7 (#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const CheckoutForm = ({className, totalPrice}) => <div className={`checkout-form ${className}`}>
  <div className="checkout-form__title">Оформление заказа</div>
  <div className="checkout-form__inputs">
    <StyledInput placeholder="Имя Фамилия" className="checkout-form__input" />
    <StyledInput placeholder="Телефон" className="checkout-form__input" inputComponent={MaskedPhoneInput} />
    <StyledInput placeholder="Адрес доставки" className="checkout-form__input" />
  </div>
  <div className="checkout-form__total-price">Итого: <span className="checkout-form__price-value">{currencyFormatter.format(totalPrice)} руб.</span></div>
  <Button theme="light" className="checkout-form__checkout-button">Оформить заказ</Button>
</div>;

export default CheckoutForm;