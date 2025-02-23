import React from "react";
import {Link} from "react-router-dom";



export function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-ling bg-white border-bottom box-shadow py-3 mb-3">
            <div className="container">
                <Link className="navbar-brand" to="/">Web App</Link>

                    <span className="navbar-toggler-icon"></span>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/products">Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


 export function Footer()
{
    return(
      <footer>
          <div className="container p-3 mt-5 border-top">
              <hr/>
              <small className="d-block text-muted text-center">&copy; 2023 - Web App</small>
          </div>
      </footer>
    );
}