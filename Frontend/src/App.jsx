import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import DelicacyList from "./pages/DelicacyList"
import Register from "./pages/Register";
import {Routes, Route, Link} from 'react-router-dom'

// const App = () => {
//    return (<><Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/" element={<Product />} />
//       </Routes></>)
   
// };

const App = () => {
   return <DelicacyList />;
 };

export default App;