import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/Auth";
import useOnLine from "../Utils/useOnline";
import Offline from "./Offline";

const Home = () => {

  const [newsubscriber, setNewSubscriber] = useState({
    newsletteremail: ""
  })

  const { homeCarousel, homeProduct, server } = useAuth()

  const handleNewsletterInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setNewSubscriber({
      ...newsubscriber,
      [name]: value
    })
  }


  const handleNewsletter = async (e) => {
    try {
      e.preventDefault()
      const response = await fetch(`${server}/api/v1/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsubscriber)
      })
      // console.log(response);

      const res = await response.json()
      // console.log(res);

      if (response.ok) {
        setNewSubscriber({
          newsletteremail: ""
        })
        toast.success(res.message)
      }
      else {
        toast.error("Already Subscribed From This Email Id")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const isOnline = useOnLine()

    if (!isOnline) {
        return <Offline />
    }

  return (
    <>
      <section className="slider_section">
        <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/carousel/2.jpg" className="d-block w-100" alt="..." />
              <div className="container">
                <div className="carousel-caption relative" style={{ left: "5%" }}>
                  {/* <h1>Our <br /> <strong className="black_bold">Latest </strong><br />
                    <strong className="yellow_bold">Product </strong></h1> */}
                  <h1>Neon Flex</h1>
                  {/* <p>It is a long established fact that a r <br />
                    eader will be distracted by the readable content of a page </p> */}
                  <p>Illuminate your space with vibrant Neon Flex, combining style and energy efficiency effortlessly.</p>
                  {/* <Link to="/ledstrip">see more Products</Link> */}
                </div>
              </div>
            </div>

            {
              homeCarousel.map((carousel) => {
                return <div className="carousel-item" key={carousel._id}>
                  <img src={carousel.file.url} className="d-block w-100" alt="..." />
                  <div className="container">
                    <div className="carousel-caption relative" style={{ left: "5%" }}>
                      {/* <h1>Our <br /> <strong className="black_bold">Latest </strong><br />
                        <strong className="yellow_bold">Product </strong></h1> */}
                      <h1 className="black_bold">{carousel.heading}</h1>
                      {/* <p>It is a long established fact that a r <br />
                        eader will be distracted by the readable content of a page </p> */}
                      <p>{carousel.description}</p>
                    </div>
                  </div>
                </div>
              })
            }

            {/* <div className="carousel-item">
              <img src="images/banner2.jpg" className="d-block w-100" alt="..." />
              <div className="container">
                <div className="carousel-caption relative">
                  <h1>Our <br /> <strong className="black_bold">Latest </strong><br />
                    <strong className="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br />
                    eader will be distracted by the readable content of a page </p>
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
                </div>
              </div>
            </div> */}
          </div>
          <button className="carousel-control-next" type="button" data-bs-target="#main_slider" data-bs-slide="prev">
            <i className='fa fa-angle-left'></i>
          </button>
          <button className="carousel-control-prev" type="button" data-bs-target="#main_slider" data-bs-slide="next">
            <i className='fa fa-angle-right'></i>
          </button>
        </div>
      </section>



      {/* <div className="whyschose">
        <div className="container">

          <div className="row">
            <div className="col-md-7 offset-md-3">
              <div className="title">
                <h2>Why <strong className="black">choose us</strong></h2>
                <span>World class quality with best price!</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="choose_bg"> */}
      <div className="container mt-5">
        {/* <div className="white_bg"> */}

        <p style={{ lineHeight: "2" }} className="text-justify"> <big> Welcome to Arkaya Lighting, your ultimate destination for high-quality lights and accessories. We offer an extensive range of Lighting products to customize any lighting, illuminate your indoor and outdoor space in a stylish and efficient way. Discover our versatile selection of LED light strips, including COB LED strip, addressable LED strip, flex LED neon lights, etc. They create a vibrant and eye-catching ambiance effortlessly, perfect for adding a captivating glow to any room or accentuating architectural features. To ensure the perfect lighting experience, we offer LED strip diffuser which diffuses light evenly and reduces glare to give your space a polished look with dotless linear light. Additionally, our smart LED Controller and LED power supply systems ensure stable and efficient performance for your LED lighting control. Illuminate your home and commercial spaces with Super Lighting LED. Shop now and find the best LED lighting solution for your project.</big></p>

        {/* <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/1.png" /></i>
                  <h3>High Build Quality</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/2.png" /></i>
                  <h3>All Kind Of Light</h3>
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
            </div> */}
      </div>
      {/* </div> */}
      {/* </div> */}


      <div className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Service <strong className="black">Process</strong></h2>
                <span>Easy and effective way to get your lighting product</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service1.png" /></i>
                <h3>Fast service</h3>
                <p className="text-justify" >Our commitment to fast service ensures minimal waiting and maximum satisfaction, delivering results swiftly and effectively.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service2.png" /></i>
                <h3>Secure payments</h3>
                <p className="text-justify" >Enjoy peace of mind with our secure payment system, safeguarding your transactions with advanced encryption.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service3.png" /></i>
                <h3>Expert team</h3>
                <p className="text-justify" >Our expert team brings years of industry experience and specialized knowledge to deliver exceptional results.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service4.png" /></i>
                <h3>Affordable services</h3>
                <p className="text-justify" >Our affordable services ensure value and reliability, making excellence accessible to all.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service5.png" /></i>
                <h3>High build quality</h3>
                <p className="text-justify" >Experience superior durability and craftsmanship with our high build quality products.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <i><img src="icon/service6.png" /></i>
                <h3>Award winning</h3>
                <p className="text-justify" >Proudly recognized for our excellence with prestigious industry awards, showcasing our commitment to quality.</p>
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

              {
                homeProduct.map((product) => {
                  return <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={product._id}>
                    <div className="product-box">
                      <i><img src={product.file.url} /></i>
                      <h3>{product.productname}</h3>
                      {/* <span>$25.00</span> */}
                    </div>
                  </div>
                })
              }


              {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
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
              </div> */}

            </div>
          </div>
        </div>
        <div className="Clients_bg_white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  {/* <h3>What Clients Say?</h3> */}
                  <h3>Testimonials</h3>
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
                    <div className="carousel-caption text-bg d-flex flex-column">
                      <div className="img_bg">
                        <i><img src="images/Clients/bayview.PNG" /><span>Bayview<br /><strong className="date">12/05/2024</strong></span></i>
                      </div>

                      {/* <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                        You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p> */}
                      <p style={{height:"200px"}}>The DMX controllers offered unparalleled versatility and control over our stage lighting.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption text-bg d-flex flex-column">
                      <div className="img_bg">
                        <i><img src="images/Clients/kode.jpg" /><span>Kode<br /><strong className="date">06/03/2024</strong></span></i>
                      </div>
                      {/* <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                        You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p> */}
                      <p style={{height:"200px"}}>Impressed by the sleek design and incredible brightness of the LED panels.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption text-bg d-flex flex-column">
                      <div className="img_bg">
                        <i><img src="images/Clients/ftv.png" /><span>FTV Club<br /><strong className="date">27/04/2024</strong></span></i>
                      </div>

                      {/* <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                        You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p> */}
                      <p style={{height:"200px"}}>The Mini LED Moving Lights transformed our event with their stunning effects and compact size.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

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
            <form className="row d-flex justify-content-center align-content-center" onSubmit={handleNewsletter}>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                <input className="form-control rounded" placeholder="Enter Your Email To Subscribe" type="email" name="newsletteremail" required onChange={handleNewsletterInput} value={newsubscriber.newsletteremail} />
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