import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Redirect from "./pages/Redirect.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PokeDetails from "./pages/PokeDetails.jsx";
import Admin from "./pages/Admin.jsx";
import EditPokemon from "./pages/EditPokemon.jsx";

function App() {

  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="details/:name" element={<PokeDetails />} />
                  <Route path="admin">
                      <Route index element={<Admin />} />
                      <Route path="edit/:id" element={<EditPokemon />} />
                  </Route>
                  <Route path="*" element={<Redirect />} />
              </Route>
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;