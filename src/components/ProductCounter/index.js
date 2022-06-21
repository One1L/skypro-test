import { useEffect, useState } from "react";
import { ReactComponent as ArrowTopIcon } from '../../res/icons/arrow-top.svg';
import { ReactComponent as ArrowBottomIcon } from '../../res/icons/arrow-bottom.svg';
import './styles.scss';

const ProductCounter = ({className, min, max, onChange = () => {}}) => {
  const [current, setCurrent] = useState(min);
  useEffect(() => onChange(current), [current]);
  return <div className={`product-counter ${className}`}>
    <div className="product-counter__value">{current}</div>
    <div className="product-counter__controls">
      <ArrowTopIcon className="product-counter__control"
        onClick={() => setCurrent(Math.min(current + 1, max))} />
      <ArrowBottomIcon className="product-counter__control"
        onClick={() => setCurrent(Math.max(current - 1, min))} />
    </div>
  </div>;
};

export default ProductCounter;