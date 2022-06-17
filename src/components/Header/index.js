import { Link } from 'react-router-dom';
import { ReactComponent as GridIcon } from '../../res/icons/grid.svg';
import { ReactComponent as CartIcon } from '../../res/icons/cart.svg';
import './styles.scss';

const Header = () => {
  return <div className="header">
    <Link to="/" className="header__logo">Интерьер.</Link>
    <div className="header__menu">
      <Link to="/" className="header__menu-item">
        <span class="header__menu-item-text">Каталог</span>
        <GridIcon class="header__menu-item-icon" />
      </Link>
      <Link to="/cart" className="header__menu-item">
        <span class="header__menu-item-text">Корзина</span>
        <CartIcon class="header__menu-item-icon" />
      </Link>
    </div>
  </div>;
};

export default Header;