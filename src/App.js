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
import Cart from './ShopingCart/Component/Cart'
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
           <Route path="/Cart" element={<Cart />}
          />
        </Routes>
    </Router>
  );
}

export default App;
