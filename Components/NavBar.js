import { Navbar,Container, Nav,NavDropdown } from "react-bootstrap";
import { useState,useEffect } from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from'../assets/img/nav-icon1.svg';
import navIcon2 from'../assets/img/nav-icon2.svg';
import navIcon3 from'../assets/img/nav-icon3.svg';
export const Navbar = () =>{
    const[srolled, setScrolled] = useState(false);
    const[activeLink, setActiveLink] = useState('home');

    useEffect(()=>{
    const onScroll = () =>{
        if(window.scrollY > 50){
            setScrolled(true);
        }else{
                setScrolled(true)
            }
        }
        window.addEventListener("scroll",onScroll)
        return ()=>window.removeEventListener("scroll",onScroll);
    },[])
 
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="7">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggles-icon"></span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' :'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#platos" className={activeLink === 'platos' ? 'active navbar-link' :'navbar-link'}onClick={()=> onUpdateActiveLink('platos')}>Platos</Nav.Link>
            <Nav.Link href="#sushi" className={activeLink === 'sushi' ? 'active navbar-link' :'navbar-link'}onClick={()=> onUpdateActiveLink('sushi')}>Sushi</Nav.Link>
            <Nav.Link href="#bebidas" className={activeLink === 'bebidas' ? 'active navbar-link' :'navbar-link'}onClick={()=> onUpdateActiveLink('bebidas')}>Bebidas</Nav.Link>
            <Nav.Link href="#piqueos" className={activeLink === 'piqueos' ? 'active navbar-link' :'navbar-link'}onClick={()=> onUpdateActiveLink('piqueos')}>Piqueos</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={navIcon1} alt=""/></a>
                <a href="#"><img src={navIcon2} alt=""/></a>
                <a href="#"><img src={navIcon3} alt=""/></a>
            </div>
            <button className="vvd" onClick={()=>console.log('On')}><span>Login</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
    
}