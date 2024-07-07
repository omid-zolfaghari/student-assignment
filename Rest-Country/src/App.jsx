import Header from "./Components/Header"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CountriesDetail from "./Pages/CountriesDetail"
import NotFound from "./Pages/NotFound"

function App() {
  

  return (
    <>
    <BrowserRouter>
     <Header/>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path="/:id" element={<CountriesDetail/>}/>
          <Route path="*" element = {<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
