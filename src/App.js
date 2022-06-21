import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Catalog from './pages/catalog';
import Cart from './pages/cart';

const App = () =>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Catalog />} />
    </Routes>
  </BrowserRouter>
;

export default App;