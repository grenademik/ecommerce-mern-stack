import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {CiHeart, CiShoppingCart,CiUser,CiFacebook,CiTwitter,CiInstagram,CiYoutube,CiPhone } from 'react-icons/ci';
import { createContext, useContext } from 'react';
import { useState } from 'react';


export const CategoryContext = createContext([]);
function Logo(){
    return(<Navbar.Brand href="#">NOLORN</Navbar.Brand>

    )
}

function AppNavbarOne (){
  const [activeCategory,setActiveCategory] = useState('B');
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }
    return( <>
    <CategoryContext.Provider value={{categories: ["All Categories","A","B"], handleCategoryChange, activeCategory}}>
    <div className='container'>
        {[true].map((expand) => (
          <Navbar key={expand} expand={expand} >
            <Container fluid>
              <Logo/>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <AppSearchBar/>
                  </Nav>
                  <Nav>

                    <Nav.Link href="#action1"><CiHeart />Wishlist</Nav.Link>
                    <Nav.Link href="#action2"><CiShoppingCart/>Cart</Nav.Link>
                    <Nav.Link href="#action2"><CiUser/>Account</Nav.Link>
                  
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
  
        ))}
      
        
        </div>
        <hr/>
          <AppNavbarTwo/>
        </CategoryContext.Provider>
      </>
     
    )
}

function AppSearchBar(){
  const {categories, activeCategory, handleCategoryChange} = useContext(CategoryContext)
  return(<>
    <InputGroup className='inputgroup'>
    <DropdownButton
      variant="outline-secondary"
      title={activeCategory}
      id="input-group-dropdown-1"
    >
      {
        categories.map(category=> 
        <Dropdown.Item onClick={() => handleCategoryChange(category)} key={category} active={activeCategory === category ? true : false}>{category}</Dropdown.Item>
        )  
      }
  </DropdownButton>
    <Form.Control aria-label="Text input with dropdown button" />
  </InputGroup>

  <Dropdown>
    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
    {activeCategory}
    </Dropdown.Toggle>

    <Dropdown.Menu>
    {
        categories.map(category=> 
        <Dropdown.Item onClick={() => handleCategoryChange(category)} key={category} active={activeCategory === category ? true : false}>{category}</Dropdown.Item>
        )  
      }
    </Dropdown.Menu>
  </Dropdown>
  </>
  )
}

function AppNavbarTwo(){
  const {categories, activeCategory, handleCategoryChange} = useContext(CategoryContext)
  return(<>
  <div className='container'>
    <Navbar variant="light" className='navsecond'>
        <Container fluid>
        <Nav style={{ padding: "0px 100px 0px 0px"}}>
          <Dropdown>
                      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                      {activeCategory}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                      {
                        categories.map(category=> 
                        <Dropdown.Item onClick={() => handleCategoryChange(category)} key={category} active={activeCategory === category ? true : false}>{category}</Dropdown.Item>
                        )  
                      }
                      </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                    <Nav className='justify-content-center'>
                    <NavDropdown title="Home" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Shop" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Blog" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    </NavDropdown>
            <Nav.Link href="#our-team">Out team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Nav className="justify-content-end">

<Nav.Link href="#action1"><CiFacebook /></Nav.Link>
<Nav.Link href="#action2"><CiTwitter/></Nav.Link>
<Nav.Link href="#action2"><CiInstagram/></Nav.Link>
<Nav.Link href="#action2"><CiYoutube/></Nav.Link>
<Nav.Link>|</Nav.Link>

<Nav.Link href="#action2" className='text-right'><CiPhone/>+977 98X XXX XXXX<br/>
</Nav.Link>



</Nav>
</Container>
      </Navbar>
      </div>
      <hr/>
      </>
  )
}

function Header (){
    return(
      <>
        <AppNavbarOne/>
        </>
    )
}

export default Header;