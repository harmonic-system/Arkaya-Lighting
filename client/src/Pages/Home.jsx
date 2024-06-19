import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <section className="slider_section">
        <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/banner2.jpg" className="d-block w-100" alt="..." />
              <div className="container">
                <div className="carousel-caption relative">
                  <h1>Our <br /> <strong className="black_bold">Latest </strong><br />
                    <strong className="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br />
                    eader will be distracted by the readable content of a page </p>
                  <Link to="/ledstrip">see more Products</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/banner2.jpg" className="d-block w-100" alt="..." />
              <div className="container">
                <div className="carousel-caption relative">
                  <h1>Our <br /> <strong className="black_bold">Latest </strong><br />
                    <strong className="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br />
                    eader will be distracted by the readable content of a page </p>
                  <a href="#">see more Products</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/banner2.jpg" className="d-block w-100" alt="..." />
              <div className="container">
                <div className="carousel-caption relative">
                  <h1>Our <br /> <strong className="black_bold">Latest </strong><br />
                    <strong className="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br />
                    eader will be distracted by the readable content of a page </p>
                  <a href="#">see more Products</a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#main_slider" data-bs-slide="prev">
            <i className='fa fa-angle-right'></i>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#main_slider" data-bs-slide="next">
            <i className='fa fa-angle-left'></i>
          </button>
        </div>
      </section>

      

      <div className="whyschose">
        <div className="container">

          <div className="row">
            <div className="col-md-7 offset-md-3">
              <div className="title">
                <h2>Why <strong className="black">choose us</strong></h2>
                <span>Fastest repair service with best price!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose_bg">
        <div className="container">
          <div className="white_bg">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/1.png" /></i>
                  <h3>Data recovery</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/2.png" /></i>
                  <h3>Computer repair</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/3.png" /></i>
                  <h3>Mobile service</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/4.png" /></i>
                  <h3>Network solutions</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </div>
              <div className="col-md-12">
                <a className="read-more">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Service <strong className="black">Process</strong></h2>
                <span>Easy and effective way to get your device repair</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service1.png" /></i>
                <h3>Fast service</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service2.png" /></i>
                <h3>Secure payments</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service3.png" /></i>
                <h3>Expert team</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service4.png" /></i>
                <h3>Affordable services</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service5.png" /></i>
                <h3>90 Days warranty</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service6.png" /></i>
                <h3>Award winning</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>our <strong className="black">products</strong></h2>
                <span>We package the products with best services to make you a happy customer.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bg">
        <div className="product-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i><img src="icon/p1.png" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i><img src="icon/p2.png" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i><img src="icon/p3.png" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i><img src="icon/p4.png" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i><img src="icon/p5.png" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i><img src="icon/p2.png" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i><img src="icon/p6.png" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i><img src="icon/p7.png" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="Clients_bg_white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h3>What Clients Say?</h3>
                </div>
              </div>
            </div>

            <div id="client_slider" className="carousel slide banner_Client" data-ride="carousel">
              <ol className="carousel-indicators">
                <li type="button" data-bs-target="#client_slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                <li type="button" data-bs-target="#client_slider" data-bs-slide-to="1" aria-label="Slide 2"></li>
                <li type="button" data-bs-target="#client_slider" data-bs-slide-to="2" aria-label="Slide 3"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="carousel-caption text-bg">
                      <div className="img_bg">
                        <i><img src="images/lllll.png" /><span>Jone Due<br /><strong className="date">12/02/2019</strong></span></i>
                      </div>

                      <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                        You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption text-bg">
                      <div className="img_bg">
                        <i><img src="images/lllll.png" /><span>Jone Due<br /><strong className="date">12/02/2019</strong></span></i>
                      </div>

                      <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                        You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption text-bg">
                      <div className="img_bg">
                        <i><img src="images/lllll.png" /><span>Jone Due<br /><strong className="date">12/02/2019</strong></span></i>
                      </div>

                      <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                        You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-2">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Our <strong className="black">Newsletter</strong></h2>
                <span>Subscribe our newsletter</span>
              </div>
            </div>
          </div>

          <div className="yellow_bg mt-0">
            <form className="row d-flex justify-content-center align-content-center">
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                <input className="form-control rounded" placeholder="Enter Your Email To Subscribe" type="email" name="email" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <button type="submit" className="form-control rounded bg-dark text-light">Subcribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home