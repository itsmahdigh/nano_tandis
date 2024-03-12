import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import LandingPage from './Pages/LandingPage';
import Blog from './Pages/Blog';
import Login from './Pages/Loign';
// import Cart from './ShopingCart/Component/Cart'
import Products from "./Pages/Products";
import Medicalproducts from "./productsPage/Component/MedicalProducts"
import ShopingCart from "./Pages/ShopingCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}
        />
        <Route
          path="/Login"
          element={<Login />}
        />
        <Route path="/Blog" element={<Blog />}
        />
        <Route path="/Cart" element={<ShopingCart />}
        />
        <Route path="/Products" element={<Products />}
        />
        <Route path="/Products/MedicalProducts" element={<Medicalproducts />}
        />
      </Routes>
    </Router>
  );
}

export default App;
