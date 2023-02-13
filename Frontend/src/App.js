import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Additems from "./Additemsforsale/Additems"
import Profile from "./Profile/Profile";
import axios from "./api/axios";
import BlingsList from "./pages/BlingsList"
import ClothingList from "./pages/ClothingList"
import DelicacyList from "./pages/DelicacyList"
import Products from "./components/Products"
import Tiedyeshirt from "./pages/clothing/Tiedyeshirt"
import Allitemsview from "./Allitemsview/Allitemsview";

const VERIFY_URL = "/verify";

function App() {
  const checkAuth = async () => {
    try {
      const response = await axios.get(VERIFY_URL, {
        headers: {
          Authorization: `Bearer $(localStorage.getItem("token)}`,
        },
      });

      const parseRes = await response?.data;

      parseRes === true ? setIsAuth(true) : setIsAuth(false);

    } catch (error) {
      console.error(error.message)
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const [isAuth, setIsAuth] = useState(false);
  const setAuth = (boolean) => {
    setIsAuth(boolean)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            !isAuth ? (
              <Login setAuth={setAuth} />
            ) : (
              <Navigate to="/profile" />
            )
          } />

        <Route
          path="/register"
          element={
            !isAuth ? (
              <Register setAuth={setAuth} />
            ) : (
              <Navigate to="/profile" />
            )
          } />

        <Route
          path="/profile"
          element={
            isAuth ? (
              <Profile setAuth={setAuth} />
            ) : (
              <Navigate to="/" />
            )
          } />

        <Route
          path="/profile"
          element={
            isAuth ? (
              <Profile setAuth={setAuth} />
            ) : (
              <Navigate to="/additems" />
            )
          } />




        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/additems" element={<Additems />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/clothinglist" element={<ClothingList />} />
        <Route path="/delicacylist" element={<DelicacyList />} />
        <Route path="/blingslist" element={<BlingsList />} />
        <Route path="/hotitems" element={<Products />} />
        <Route path="/cartitems" element={<Cart />} />
        <Route path="/tiedyeshirt" element={<Tiedyeshirt />} />
        <Route path="/allitemsview" element={<Allitemsview />} />
      </Routes>
    </BrowserRouter>
  )
};

// const App = () => {
//    return (<><Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />s
//       <Route path="/register" element={<Register />} />
//       <Route path="/" element={<Product />} />
//       </Routes></>)

// };

// const App = () => {
//    return <Profile />;

// }
export default App;

















// import Tiedyeshirt from "./pages/clothing/Tiedyeshirt";
// import Bluefloral from "./pages/clothing/Bluefloral"
// import Embroideredpants from './pages/clothing/Embroideredpants'
// import Iloveduma from "./pages/clothing/Ilovedumashirt"
// import Beautyphil from "./pages/clothing/Beautyphil"
// import Tiedyepantsred from "./pages/clothing/Tiedyepantsred"
// import Tiedyeshorts from "./pages/clothing/Tiedyeshorts"
// import Filipinoshirt from "./pages/clothing/Filipinoshirt"
// import Budbudfood from "./pages/foods/Budbudfood"
// import Mangofood from "./pages/foods/Mangofood"
// import Assortedpins from "./pages/decor/Assortedpins"
// import ClothingList from "./pages/ClothingList";
// import DelicacyList from "./pages/DelicacyList"
// import BlingsList from "./pages/BlingsList"