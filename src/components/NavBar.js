import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <img src="https://www.travthetraveller.com/wp-content/uploads/2020/02/food.png" height={"45px"} alt="img"/>
        {localStorage.getItem("token") ?( <span className="navbar-brand" >
            Fitness Recipe
          </span> ):(
            <Link className="navbar-brand" to="/" >
            Fitness Recipe
          </Link>
          )}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {localStorage.getItem("token") ? (
                <li className="nav-item">
                <Link className="nav-link" to="/recipe">
                  Home
                </Link>
              </li> 
                ) : null}  
             <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> 
                  
            </ul>
            {localStorage.getItem("token") ? (
              <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout } type="submit">Logout</button>
              </form>
                ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
