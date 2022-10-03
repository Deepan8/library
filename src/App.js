import Navbar from "../src/components/common/navbar/navbar"

import Trending from "../src/pages/Trending"
 import Home from "../src/pages/home"
 import Search from "../src/pages/search"
 import Createform from "./components/dashboard/create/create"
 import Submitpara from "./components/common/submitpara/submitpara"
 import Readmore from "./components/dashboard/content/readmore"
import {Maincontainer} from "../src/styles"
import { Route, Routes } from "react-router-dom"


function App() {
 
  return (
    <>
    
    <Maincontainer >
      <Navbar />
      <div className="container">
        <Routes>
        <Route path="/Home" element={<Home />} /> 
          <Route path="/search" element={<Search />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/create" element={<Createform />} />
          <Route path="/submitpara" element={<Submitpara />} />
          <Route path="/Readmore" element={<Readmore />} />
        </Routes>
      </div>
    </Maincontainer>
    </>
  )
}

export default App
