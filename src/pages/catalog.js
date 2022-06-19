import { useState } from 'react';
import Header from '../components/Header';
import StyledSelect from '../components/StyledSelect';
import './catalog.scss';

const Catalog = () => {
  const [sortBy, setSortBy] = useState('price-asc');
  return <div className="catalog-page">
    <Header />
    <div className="catalog-page__content">
      <StyledSelect className="catalog-page__select" value={sortBy} onChange={(event) => setSortBy(event.target.value)} />
    </div>
  </div>;
};

export default Catalog;