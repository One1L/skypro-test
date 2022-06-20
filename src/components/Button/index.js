import './styles.scss';

const Button = ({theme, children, onClick, className}) =>
  <div onClick={onClick} className={`button button_theme_${theme} ${className}`}>
    {children}
  </div>;

export default Button;