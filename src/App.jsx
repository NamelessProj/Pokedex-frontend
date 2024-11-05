import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Redirect from "./pages/Redirect.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PokeDetails from "./pages/PokeDetails.jsx";

function App() {

  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/details/:name" element={<PokeDetails />} />
              <Route path="/*" element={<Redirect />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;