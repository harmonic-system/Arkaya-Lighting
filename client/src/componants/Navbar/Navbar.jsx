import { Link } from "react-router-dom"
import "./Navbar.css"
import TopHeader from "../../Pages/TopHeader"
import { useAuthContext } from "../../store/authContext"

const Navbar = () => {

  const { isAuthenticated, user, logout } = useAuthContext()

  return (
    <>
      <TopHeader />
      <nav>
        <div className="wrapper">
          <div className="top-logo">
            <Link to="/"><img src="./images/arkaya-logo-transformed.png" alt="Arkaya Logo" style={{ width: "100%", height: "100%" }} className="py-2" /></Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn text-light"><i className="fa fa-times"></i></label>
            <li><Link to="/arkaya">HOME</Link></li>

            {/* Products Mega Menu Start */}
            <li>
              <Link className="desktop-item">PRODUCTS</Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">PRODUCTS</label>
              <div className="mega-box">
                <div className="content">

                  <div className="pro">
                    <header>LIGHTING FIXTURE</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">
                      <li><Link to="/temparchitecture">Architecture</Link></li>
                      {/* <li><Link to="/architecture">Architecture</Link></li> */}
                      <li><Link to="/entertainment">Entertainment</Link></li>
                      <li><Link to="/ledpixels">LED Pixels</Link></li>
                      <li><Link to="/decorative">Decorative</Link></li>
                      {/* <li><Link to="/threaterstudiotelevision">Threater, Studio, Television</Link></li> */}
                    </ul>
                  </div>

                  <div className="pro">
                    <header>Video Displays</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">
                      {/* <li><Link to="/rentalseries">Rental Series</Link></li> */}
                      <li><Link to="/indoorseries">Indoor Series</Link></li>
                      <li><Link to="/outdoorseries">Outdoor Series</Link></li>
                    </ul>
                  </div>

                  <div className="pro">
                    <header>Controllers Distribution & Interfaces</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">
                      <li><Link to="/ledcontrollers">LED Controllers</Link></li>
                      <li><Link to="/dmxcontrollers">DMX Controllers</Link></li>
                      <li><Link to="/signaldistributionandpowersupply">Signal Distribution & Power Supply</Link></li>
                      <li><Link to="/decorderandamplifier">Decorders & Amplifiers</Link></li>
                      {/* <li><Link to="/processors">Processors</Link></li> */}
                    </ul>
                  </div>

                  <div className="pro">
                    <header>Rigging</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">
                      <li><Link to="/truss">Truss</Link></li>
                      <li><Link to="/clamps">Clamps</Link></li>
                      <li><Link to="/alluminiumprofile">Alluminium Profile</Link></li>
                      <li><Link to="/siliconprofile">Silicon Profile</Link></li>
                      {/* <li><Link to="/stagelightingsystem">Stage Lighting Systems</Link></li> */}
                      {/* <li><Link to="/studiolightingsystem">Studio Lighting Systems</Link></li> */}
                    </ul>
                  </div>

                  <div className="pro">
                    <header>Spaers & Accessories</header>
                    <hr className="bg-secondary" />

                    <ul className="mega-links">
                      <li><Link to="/connectors">Connectors</Link></li>
                    </ul>
                  </div>



                </div>
              </div>
            </li>
            {/* Products Mega Menu End */}


            {/* <li><Link to="/brands">BRANDS PATNERS</Link></li> */}

            {/* <li><Link to="/application">APPLICATION</Link></li> */}

            <li>
              <Link className="desktop-item">RESOURCES</Link>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">RESOURCES</label>
              <ul className="drop-menu">
                <li><Link to="/software">Software</Link></li>
                <li><Link to="/howtobuy">How To Buy</Link></li>
                {/* <li><Link to="/">DataSheet</Link></li> */}
                {/* <li><Link to="/">Solution Support</Link></li> */}
              </ul>
            </li>

            <li><Link to="/discover">DISCOVER US</Link></li>

            <li><Link to="/contact">CONTACT</Link></li>

            <li>
              {
                isAuthenticated ?
                  <span>
                    <Link className="desktop-item">{user?.name?.length < 10 ? user?.name?.toUpperCase() : user?.name?.slice(0, 10).toUpperCase()}</Link>
                    {/* <Link className="desktop-item">{user?.name}</Link> */}
                    <input type="checkbox" id="showDrop-profile" />
                    <label htmlFor="showDrop-profile" className="mobile-item">{user?.name?.length < 10 ? user?.name?.toUpperCase() : user?.name?.slice(0, 10).toUpperCase()}</label>
                    <ul className="drop-menu-profile">
                      <li><Link to="/userprofile">Profile</Link></li>
                      {/* <li><Link to="/cart">Cart</Link></li> */}
                      <li><Link to="/" onClick={() => logout()}>Logout</Link></li>
                    </ul>
                  </span>
                  :
                  <Link to="/login">LOGIN</Link>
              }
            </li>
            <li>
              {
                user?.isAdmin ? (<Link to="/admin">Admin Section</Link>) : ("")
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





