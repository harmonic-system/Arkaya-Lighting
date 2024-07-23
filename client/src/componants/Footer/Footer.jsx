import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <ul className="sociel">
                  <li className="text-light"> <a target="_blank" href="https://www.facebook.com/profile.php?id=61550851665100" ><i className="fa fa-facebook"></i></a></li>
                  <li className="text-light"> <a target="_blank" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="text-light"> <a target="_blank" href="https://www.instagram.com/arkayalighting/"><i className="fa fa-instagram"></i></a></li>
                  <li className="text-light"> <a target="_blank" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="contact">
                  <h3>conatct us</h3>
                  <span>142, Main Patparganj Road,<br />Mayur Vihar Phase 1,<br/> New Delhi<br />+91 1234567890</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="contact">
                  <h3>Helpfull LINKS</h3>
                  <ul className="lik">
                    <li> <Link to="/discover">Discover us</Link></li>
                    <li> <Link to="/shipping_return">Shipping & Return</Link></li>
                    <li> <Link to="/privacypolicy">Privacy policy</Link></li>
                    <li> <Link to="/faqs">FAQs</Link></li>
                    <li> <Link to="/contact">Contact us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="contact">
                  <h3>Resources</h3>
                  <ul className="lik">
                    <li> <Link to="/software">Software</Link></li>
                    <li> <Link to="/howtobuy">How to Buy</Link></li>
                    <li> <Link to="/datasheet">Data Sheet</Link></li>
                    <li> <Link to="/solution">Solution Support</Link></li>
                    <li> <Link to="/technical">Technical support</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="contact">
                  <h3>Arkaya Lighting</h3>
                  <span>Arkaya Lighting is a dynamic company specializing in the trading and distribution of cutting-edge lighting and video equipment. Renowned for their innovative solutions, Arkaya seamlessly blends technology and design, catering to diverse industries. With a commitment to excellence, they illuminate spaces and elevate experiences through their high-quality products and services.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer