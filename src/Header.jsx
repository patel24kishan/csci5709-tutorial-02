import {Navbar} from 'react-bootstrap';
import "./Header.css";
import Navigationbar from './Navigationbar';
import Logo from "./images/Logo.PNG";
import User from "./images/user.PNG";
function Header() {
  return (
    <>
        {/* <Navbar bg="light" variant="light">
            <Container>   
                <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={Logo}
                        width="150"
                        height="80"
                        className="position-relative top-0 start-0 mainlogo"
                        />
                </Navbar.Brand>

                <Navbar.Brand href="#User">
                        <img
                        alt=""
                        src={User}
                        width="80"
                        height="80"
                        className="position-relative top-0 bottom-0 usericon"
                        />
                </Navbar.Brand>
            </Container>
        </Navbar> */}
          <section className='header'>
            <section className='header-top'>
              <section className='header-top-logo'>
                <img
                        alt=">Logo"
                        src={Logo}
                        width="150"
                        height="80"
                        className="header-top-logo"
                />
              </section >
              <section className='header-top-right-logo'>
                <img
                        alt="/User"
                        src={User}
                        width="80"
                        height="80"
                        className="header-top-right-logo"
          />
              </section>
            </section>
          </section>
 
           <section className='header-bottom'> 
            <section className='header-top_navbar'>
               <Navigationbar/>
            </section>
          </section> 
    </>
  );
}

export default Header;
