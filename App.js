import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Breakfast from "./pages/breakfast";
import Lunch from "./pages/lunch";
import Dinner from "./pages/dinner";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App(){
  return(
    <div style={{ backgroundColor: "#bcd4e6", minHeight: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path = "breakfast" element = {<Breakfast />} />
            <Route path = "lunch" element = {<Lunch />} />
            <Route path = "dinner" element = {<Dinner />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

