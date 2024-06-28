import { Link } from "react-router-dom"
import "./Navbar.css"
import TopHeader from "../../Pages/TopHeader"
import { useAuth } from "../../store/Auth"

const Navbar = () => {

  const { user } = useAuth()

  return (
    <>
      <TopHeader />
      <nav>
        <div className="wrapper">
          <div className="top-logo">
            <Link to="/"><img src="./images/arkaya-logo.png" alt="Arkaya Logo" style={{ width: "100%", height: "100%" }} className="py-2" /></Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn text-light"><i className="fa fa-times"></i></label>
            <li><Link to="/arkaya">HOME</Link></li>





            <li>
              <div className="dropdown">

                <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTS</a>

                <ul className="dropdown-menu profile">
                  <li><Link className="text-light" to="/interior">Interior</Link></li>
                  <li><Link className="text-light" to="/exterior">Exterior</Link></li>
                  <li><Link className="text-light" to="/decorative">Decorative</Link></li>
                  <li><Link className="text-light" to="/entertainment">Entertainment</Link></li>
                  <li><Link className="text-light" to="/led_strip">LED Strip</Link></li>
                </ul>
              </div>
            </li>












            {/* Products Mega Menu Start */}
            {/* <li>
              <Link className="desktop-item">PRODUCTS</Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">PRODUCTS</label>
              <div className="mega-box">
                <div className="content">
                  <div className="pro">
                    <header>FIXTURE</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">

                      <li>
                        <div className="dropdown">
                          <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Architecture</a>

                          <ul className="dropdown-menu bg-dark">
                            <li><Link className="dropdown-item" to="/">Interior</Link></li>
                            <li><Link className="dropdown-item" to="/">Exterior</Link></li>
                            <li><Link className="dropdown-item" to="/">Decorative</Link></li>
                          </ul>
                        </div>
                      </li>

                      <li><Link to="/">Entertainment</Link></li>

                      <li>
                        <div className="dropdown">
                          <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">LED Pixels</a>

                          <ul className="dropdown-menu bg-dark">
                            <li><Link className="dropdown-item" to="/ledstrip">Led Strips</Link></li>
                            <li><Link className="dropdown-item" to="/">Exterior</Link></li>
                            <li><Link className="dropdown-item" to="/">Decorative</Link></li>
                          </ul>
                        </div>
                      </li>

                      <li><Link to="/">Decorative</Link></li>

                    </ul>

                  </div>

                  <div className="pro">
                    <header>Controllers & Automation</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">
                      <li><Link to="/">LED Controllers</Link></li>
                      <li><Link to="/">Smart Home Automation</Link></li>
                      <li><Link to="/">DMX Controllers</Link></li>
                    </ul>
                  </div>

                  <div className="pro">
                    <header>Distribution & Dimmer</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">
                      <li><Link to="/">Single Distribution</Link></li>
                      <li><Link to="/">Power Supply</Link></li>
                      <li><Link to="/">Dimmers</Link></li>
                      <li><Link to="/">Power Boxes</Link></li>
                    </ul>
                  </div>

                  <div className="pro">
                    <header>Rigging</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">
                      <li><Link to="/">Truss</Link></li>
                      <li><Link to="/">Clamps</Link></li>
                      <li><Link to="/">Alluminium Profile</Link></li>
                      <li><Link to="/">Silicon Profile</Link></li>
                    </ul>
                  </div>

                  <div className="pro">
                    <header>Accessories</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">
                      <li><Link to="/">Connectors</Link></li>
                      <li><Link to="/">Clamps</Link></li>
                      <li><Link to="/">Clip</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </li> */}
            {/* Products Mega Menu End */}


            {/* <li><Link to="">BRANDS</Link></li> */}

            <li>
              <Link className="desktop-item">RESOURCES</Link>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">RESOURCES</label>
              <ul className="drop-menu">
                <li><Link to="/">Software</Link></li>
                <li><Link to="/howtobuy">How To Buy</Link></li>
                <li><Link to="/">DataSheet</Link></li>
                <li><Link to="/">Solution Support</Link></li>
              </ul>
            </li>

            <li><Link to="/discover">DISCOVER US</Link></li>

            <li><Link to="/contact">CONTACT</Link></li>

            <li>
              {
                !user ? <Link to="/login">LOGIN</Link>
                  :

                  <div className="dropdown">

                    <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{user.name.toUpperCase()}</a>

                    <ul className="dropdown-menu profile">
                      <li><Link className="text-light" to="/userprofile">Profile</Link></li>
                      <li><Link className="text-light" to="/cart">Cart</Link></li>
                      <li><Link className="text-light" to="/logout">Logout</Link></li>
                    </ul>
                  </div>

              }
            </li>

            <li>
              {
                user.isAdmin ? <Link to="/adminlayout">Admin Section</Link> : ""

              }
            </li>

          </ul>

          <label htmlFor="menu-btn" className="btn menu-btn"><i className="fa fa-bars"></i></label>

        </div>
      </nav>





    </>
  )
}

export default Navbar





