import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar,Footer} from "./components/Crud_Pages/layout";
import {Home} from "./components/Crud_Pages/home"
import {Products} from "./components/Crud_Pages/products";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App()
{
    return(
        <>
        <BrowserRouter>
            <Navbar/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
</Routes>
            <Footer/>
        </BrowserRouter>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



