import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import Prodotto from "./pages/Prodotto";
import PaginaErrore from "./pages/PaginaErrore";
import FavouriteContext from "./context/FavouriteContext";

function App() {
  const [favourite, setFavourite] = useState([])

  function toggleFavourite(id) {


    if (favourite.includes(id)) {
      console.log('remove');
      removeFavourite(id)
    } else {
      console.log('add');
      addFavourite(id)
    }
  }

  function addFavourite(id) {
    setFavourite([...favourite, id])
  }

  function removeFavourite(id) {
    setFavourite((prevFav) => prevFav.filter(favId => favId !== id))
  }

  function isFavourite(id) {
    return favourite.includes(id)

  }

  return (
    <>
      <FavouriteContext.Provider value={{ favourite, setFavourite, toggleFavourite, isFavourite }}>
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
      </FavouriteContext.Provider>
    </>
  )
}

export default App
