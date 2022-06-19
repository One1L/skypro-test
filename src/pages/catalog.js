import { useEffect, useState } from 'react';
import Header from '../components/Header';
import StyledSelect from '../components/StyledSelect';
import Product from '../components/Product';
import product0Image from '../res/images/product-0.jpeg';
import product1Image from '../res/images/product-1.jpeg';
import product2Image from '../res/images/product-2.jpeg';
import product3Image from '../res/images/product-3.jpeg';
import product4Image from '../res/images/product-4.jpeg';
import product5Image from '../res/images/product-5.jpeg';
import './catalog.scss';

const PRODUCTS = [
  {
    id: 0, imgSrc: product0Image, title: 'Кровать TATRAN',
    desc: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.', price: 120000,
  },
  {
    id: 1, imgSrc: product1Image, title: 'Кресло VILORA',
    desc: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.', price: 21000,
  },
  {
    id: 2, imgSrc: product2Image, title: 'Стол MENU',
    desc: 'Европейский дуб - отличается особой прочностью и стабильностью.', price: 34000,
  },
  {
    id: 3, imgSrc: product3Image, title: 'Диван ASKESTA',
    desc: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать', price: 68000,
  },
  {
    id: 4, imgSrc: product4Image, title: 'Кресло LUNAR',
    desc: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки', price: 40000,
  },
  {
    id: 5, imgSrc: product5Image, title: 'Шкаф Nastan',
    desc: 'Мебель может быть оснащена разнообразными системами подсветки.', price: 80000,
  },
];
const Catalog = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [sortBy, setSortBy] = useState('price-asc');
  useEffect(() => {
    setProducts(PRODUCTS.concat().sort(
      ({price: a}, {price: b}) => sortBy === 'price-asc' ? a - b : b - a
    ));
  }, [sortBy]);
  return <div className="catalog-page">
    <Header />
    <div className="catalog-page__content">
      <StyledSelect className="catalog-page__select" value={sortBy} onChange={(event) => setSortBy(event.target.value)} />
      <div className="catalog-page__products">
        {products.map(product => <Product {...product} key={product.id} />)}
      </div>
    </div>
  </div>;
};

export default Catalog;