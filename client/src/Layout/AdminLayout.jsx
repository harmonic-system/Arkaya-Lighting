import { Link } from "react-router-dom";
import "./AdminLayout.css"

const AdminLayout = () => {
  return (
    <>
      <section className="w-100 border bordder-warning">
        <div className="w-100 admin_nav">
          <ul className="d-flex p-5">
            <li className="btn btn-dark m-2"><Link className="text-light" to="/admin_users">Users</Link></li>
            <li className="btn btn-dark m-2"><Link className="text-light" to="/admin_contacts">Contact</Link></li>
            <li className="btn btn-dark m-2"><a className="text-light" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Products</a></li>
            <li className="btn btn-dark m-2"><Link className="text-light" to="/admin_productquerry">Product Querry</Link></li>
            <li className="btn btn-dark m-2"><Link className="text-light" to="/admin_newsletter">NewsLetters</Link></li>
          </ul>
        </div>
      </section>


      {/* Off Canvas Body After Trail We will use this so please don't delete */}

      {/* <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasExampleLabel"><b>Products List</b></h2>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body product_nav">
          <ul className="list-group mt-5">
            <h3><b>Fixture</b></h3>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Architecture
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Entertainment
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LED Pixels
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Led Strips</Link></li>
                  <li><Link className="dropdown-item" to="/">Exterior</Link></li>
                  <li><Link className="dropdown-item" to="/">Decorative</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Decorative
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
          </ul>


          <ul className="list-group mt-5">
            <h3><b>Controllers & Automation</b></h3>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LED Controllers
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Smart Home Automation
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  DMX Controllers
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
          </ul>

          <ul className="list-group mt-5">
            <h3><b>Distribution & Dimmer</b></h3>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Single Distribution
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Power Supply
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dimmers
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Power Boxes
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
          </ul>

          <ul className="list-group mt-5">
            <h3><b>Rigging</b></h3>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Truss
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Clamps
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Alluminium Profiles
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Silicon Profiles
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
          </ul>

          <ul className="list-group mt-5">
            <h3><b>Accessories</b></h3>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Connectors
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Clamps
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
            <li className="list-group-item">
              <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Clip
                </a>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div> */}




      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasExampleLabel">Product Lists</h2>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          <Link className="bg-warning text-center p-2" to="/admininterior" >Interior</Link>
          <Link className="bg-warning text-center p-2" to="/adminexterior" >Exterior</Link>
          <Link className="bg-warning text-center p-2" to="/admindecorative" >Decorative</Link>
          <Link className="bg-warning text-center p-2" to="/adminentertainment" >Entertainment</Link>
          <Link className="bg-warning text-center p-2" to="/adminledstrip" >LED Strip</Link>
        </div>
      </div>






    </>
  )
}

export default AdminLayout;