import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./cal.png";
import "./navbar.css";
import { ButtonContainer , Span, Nav} from "./navbar_styles";
class Navbar extends Component {
  render() {
    return (
      <>
        <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <Link to='/'>
            <img src={Logo} alt="store" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5 nav-product">

              <Link to='/' className="nav-link">
                  Products
              </Link>
              </li>
          </ul>
          <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                  <Span>
                  <i className="fas fa-cart-plus"/>
                  </Span>
                  my cart
              </ButtonContainer>
          </Link>
        </Nav>
      </>
    );
  }
}



export default Navbar;
