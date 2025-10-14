import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>Home Page</Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
