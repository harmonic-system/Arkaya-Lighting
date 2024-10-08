import { Link, Outlet, useNavigate } from "react-router-dom";
import "./AdminLayout.css"
import { useAuth } from "../store/Auth";
import { useEffect } from "react";

const AdminLayout = () => {

  const navigate = useNavigate()
  const { auth } = useAuth()
  // console.log(auth);

  useEffect(() => {
    if (!auth?.isAdmin) {
      navigate("/")
    }
  }, [])


  return (
    <>
      <div className="container">
        <section className="w-100">
          <div className="w-100 admin_nav">
            <ul className="d-flex p-5">
              <li className="btn btn-dark m-2"><Link className="text-light" to="/admin/users">Users</Link></li>
              <li className="btn btn-dark m-2"><Link className="text-light" to="/admin/contacts">Contact</Link></li>
              <li className="btn btn-dark m-2"><a className="text-light" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Products</a></li>
              <li className="btn btn-dark m-2"><Link className="text-light" to="/admin/productquery">Query</Link></li>
              <li className="btn btn-dark m-2"><Link className="text-light" to="/admin/newsletter">NewsLetters</Link></li>
            </ul>
          </div>
          <hr />
          <div className="w-100 admin_nav">
            <ul className="d-flex p-5">
              <li className="btn btn-dark m-2"><Link className="text-light" to="/admin/homecarousel">Home Carousel</Link></li>
              <li className="btn btn-dark m-2"><Link className="text-light" to="/admin/homeproducts">Home Product</Link></li>
              <li className="btn btn-dark m-2"><Link className="text-light" to="/admin/application">Application</Link></li>
            </ul>
          </div>
        </section>
        <Outlet />
      </div>


      {/* Off Canvas Body After Trail We will use this so please don't delete */}

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasExampleLabel"><b>Products List</b></h2>
          <button type="button" className="btn-close adminLayoutNavCloseButton" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body product_nav">
          <ul className="list-group mt-5">
            <h3><b>Lighting Fixture</b></h3>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Architecture
                </a>

                <ul className="dropdown-menu">
                  {/* <li><Link className="dropdown-item" to="/admin/commercial">Commercials</Link></li>
                  <li><Link className="dropdown-item" to="/admin/dynamicfacade">Dynamic Facade</Link></li>
                  <li><Link className="dropdown-item" to="/admin/landscapes">Landscapes</Link></li>
                  <li><Link className="dropdown-item" to="/admin/museums">Museums</Link></li>
                  <li><Link className="dropdown-item" to="/admin/residential">Residentials</Link></li>
                  <li><Link className="dropdown-item" to="/admin/pointsource">Point Source</Link></li> */}
                  <li><Link className="dropdown-item" to="/admin/floodlight">Flood Lights</Link></li>
                  <li><Link className="dropdown-item" to="/admin/undergroundlight">Underground Lights</Link></li>
                  <li><Link className="dropdown-item" to="/admin/underwaterlight">Underwater Lights</Link></li>
                  <li><Link className="dropdown-item" to="/admin/wallwasher">Wall Washer Lights</Link></li>
                  <li><Link className="dropdown-item" to="/admin/treehanging">Tree Hanging Lights</Link></li>
                  <li><Link className="dropdown-item" to="/admin/mediapixel">Media Pixels</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Entertainment
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/admin/movingheadserieslamp">Moving Head Series - Lamp</Link></li>
                  <li><Link className="dropdown-item" to="/admin/movingheadseriesled">Moving Head Series - Led</Link></li>
                  <li><Link className="dropdown-item" to="/admin/staticled">Static Led</Link></li>
                  <li><Link className="dropdown-item" to="/admin/effectlight">Effects Light</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LED Pixels
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/admin/strips">Strips</Link></li>
                  <li><Link className="dropdown-item" to="/admin/dotpixels">Dot Pixels</Link></li>
                  <li><Link className="dropdown-item" to="/admin/ledmatrix">Led Matrix</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Decorative
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/admin/chandeliers">Chandeliers</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Threater Studio & Television
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/admin/threater">Threater</Link></li>
                  <li><Link className="dropdown-item" to="/admin/studio">Studio</Link></li>
                  <li><Link className="dropdown-item" to="/admin/television">Televison</Link></li>
                </ul>
              </div>
            </li>
          </ul>


          <ul className="list-group mt-5">
            <h3><b>Video Displays</b></h3>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/rentalseries">Rental Series</Link></li>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/indoorseries">Indoor Series</Link></li>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/outdoorseries">Outdoor Series</Link></li>

          </ul>

          <ul className="list-group mt-5">
            <h3><b>Controllers,Distribution & Interfaces</b></h3>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/ledcontrollers">Led Controllers</Link></li>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/dmxcontrollers">Dmx Controllers</Link></li>




            {/* <li><Link className="btn btn-warning w-100 mb-3" to="/admin/signaldistribution">Signal Distribution</Link></li> */}
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Signal Distribution & Power Supply
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/admin/signaldistribution">Signal Distribution</Link></li>
                  <li><Link className="dropdown-item" to="/admin/powersupply">Power Supply</Link></li>
                </ul>
              </div>
            </li>





            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/decorderandamplifier">Decorders And Amplifiers</Link></li>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/processors">Processors</Link></li>

          </ul>

          <ul className="list-group mt-5">
            <h3><b>Rigging</b></h3>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/truss">Truss</Link></li>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/clamps">Clamps</Link></li>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/alluminiumprofile">Alluminium Profile</Link></li>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/siliconprofile">Silicon Profile</Link></li>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/stagelightingsystem">Stage Lighting System</Link></li>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/studiolightingsystem">Studio Lighting System</Link></li>

          </ul>

          <ul className="list-group mt-5">
            <h3><b>Accessories</b></h3>
            <li><Link className="btn btn-warning w-100 mb-3" to="/admin/connectors">Connectors</Link></li>

          </ul>
        </div>
      </div>

    </>
  )
}

export default AdminLayout;