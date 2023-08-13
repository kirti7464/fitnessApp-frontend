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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img src="https://www.travthetraveller.com/wp-content/uploads/2020/02/food.png" height={"35px"} alt="img"/>
  {localStorage.getItem("token") ?( <>
    Fitness Recipe
  </> ):(
            <Link className="navbar-brand" to="/" >
            Fitness Recipe
          </Link>
          )}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
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
      {localStorage.getItem("token") ? (<form className="d-flex">
        <button className="btn btn-outline-success" onClick={handleLogout } type="submit">Logout</button>
      </form>) : null}
    </div>
  </div>
</nav>  
    </div>
  );
};

export default NavBar;
