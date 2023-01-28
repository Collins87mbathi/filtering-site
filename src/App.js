import Home from "./Home/Home";
// import Items from "./Items/Items";
import Navbar from "./Navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
