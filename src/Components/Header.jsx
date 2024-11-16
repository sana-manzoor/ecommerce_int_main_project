import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import './Header.css'; // 

function Header() {
  const [logged, setLogged] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
  };

  const checkLoginStatus = () => {
    if (localStorage.getItem("currentUser")) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-light shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{height:'80px',width:'85px'}}             
              className="img-fluid logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="search-bar">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search products..."
              />
            </Nav.Item>
          </Nav>

          <Nav>
            {logged ? (
              <Nav.Item>
                <Link to="/login">
                  <Button
                    variant="outline-dark"
                    className="btn ms-3 btn-lg"
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                </Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Link to="/login">
                  <Button
                    variant="outline-dark"
                    className="btn ms-3 btn-lg"
                  >
                    Login <i className="fa-solid fa-user"></i>
                  </Button>
                </Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <Link to="/wish">
                <Button
                  variant="outline-dark"
                  className="btn ms-3 btn-lg"
                >
                  WishList <i className="fa-solid fa-heart"></i>
                </Button>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/cart">
                <Button
                  variant="outline-dark"
                  className="btn ms-3 btn-lg"
                >
                  Cart <i className="fa-solid fa-cart-shopping"></i>
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
