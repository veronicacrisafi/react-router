import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import Prodotto from "./pages/Prodotto";
import PaginaErrore from "./pages/PaginaErrore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="presentazione" element={<ChiSiamo />} />
            <Route path="prodotti" element={<Prodotti />} />
            <Route path="prodotti/:id" element={<Prodotto />} />
            <Route path="errore" element={<PaginaErrore />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
