
import './App.scss';
import  Header from './Components/Header';
import  Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from './Pages/Products/Products';
import routes from "./Config/routes";


function App() {
  return (
    <div className="App">
    <Router>
     <Header/>
     <Routes>
     
     {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
               
     </Routes>
     
       <Footer/> 
     </Router>
       {/* <Home/> */}
     {/* <Footer/>  */}
    </div>
  );
}

export default App;
