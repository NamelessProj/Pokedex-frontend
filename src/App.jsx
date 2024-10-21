import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;