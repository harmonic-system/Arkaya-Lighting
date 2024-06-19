import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose_bg white_bg">
        <div className="container">

          <div className="white_bg">
            <div className="for_box cart-section">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <h3>Item Name</h3>
                  <i className="w-100"><img src="./images/1.jpg" /></i>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 w-100">
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-evenly align-content-center my-3 w-100">
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-2">
                        <button className="w-25" style={{ border: "1px solid #ffc107" }} ><strong>+</strong></button>
                        <input type="text" name="" id="" className="w-25" style={{ border: "1px solid #ffc107" }} readOnly />
                        <button className="w-25" style={{ border: "1px solid #ffc107" }} ><strong>-</strong></button>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-10 d-flex justify-content-around align-items-center">
                        <p>Rs.1000000</p>
                        <button type="submit" className="bg-transparent"><span className="material-symbols-outlined text-danger">delete</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="white_bg">
            <div className="for_box cart-section">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <h3>Item Name</h3>
                  <i className="w-100"><img src="./images/1.jpg" /></i>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 w-100">
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-evenly align-content-center my-3 w-100">
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-2">
                        <button className="w-25" style={{ border: "1px solid #ffc107" }} ><strong>+</strong></button>
                        <input type="text" name="" id="" className="w-25" style={{ border: "1px solid #ffc107" }} readOnly />
                        <button className="w-25" style={{ border: "1px solid #ffc107" }} ><strong>-</strong></button>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-10 d-flex justify-content-around align-items-center">
                        <p>Rs.1000000</p>
                        <button type="submit" className="bg-transparent"><span className="material-symbols-outlined text-danger">delete</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="white_bg">
            <div className="for_box cart-section">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <h3>Item Name</h3>
                  <i className="w-100"><img src="./images/1.jpg" /></i>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 w-100">
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-evenly align-content-center my-3 w-100">
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-2">
                        <button className="w-25" style={{ border: "1px solid #ffc107" }} ><strong>+</strong></button>
                        <input type="text" name="" id="" className="w-25" style={{ border: "1px solid #ffc107" }} readOnly />
                        <button className="w-25" style={{ border: "1px solid #ffc107" }} ><strong>-</strong></button>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-10 d-flex justify-content-around align-items-center">
                        <p>Rs.1000000</p>
                        <button type="submit" className="bg-transparent"><span className="material-symbols-outlined text-danger">delete</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="white_bg">
            <div className="for_box cart-section">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <h3>Item Name</h3>
                  <i className="w-100"><img src="./images/1.jpg" /></i>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 w-100">
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                      <p className="text-dark mb-2" >Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-evenly align-content-center my-3 w-100">
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-2">
                        <button className="w-25" style={{ border: "1px solid #ffc107" }} ><strong>+</strong></button>
                        <input type="text" name="" id="" className="w-25" style={{ border: "1px solid #ffc107" }} readOnly />
                        <button className="w-25" style={{ border: "1px solid #ffc107" }} ><strong>-</strong></button>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-10 d-flex justify-content-around align-items-center">
                        <p>Rs.1000000</p>
                        <button type="submit" className="bg-transparent"><span className="material-symbols-outlined text-danger">delete</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>


        <div className="container p-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 text-center d-flex flex-wrap gap-3 justify-content-evenly w-100">
              <Link to="" className="btn btn-dark">Continue Shopping</Link>
              <Link to="" className="btn btn-success">Procced To Checkout</Link>
            </div>
          </div>
        </div>





      </div>
    </>
  )
}

export default Cart