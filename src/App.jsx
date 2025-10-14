import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/presentazione" element={<ChiSiamo />} />
          <Route path="/prodotti" element={<Prodotti />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
