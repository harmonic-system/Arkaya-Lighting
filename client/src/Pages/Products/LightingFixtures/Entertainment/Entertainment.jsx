import { Link } from "react-router-dom";

const Entertainment = () => {
  return (
    <>
      <div className="products-image mb-5">
        <div className="container">
          <div className="row">
            <Link to="/movingheadserieslamp" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Entertainment/mhslamp.png" />
                <h3>Moving Head Series - Lamp</h3>
              </div>
            </Link>
            <Link to="/movingheadseriesled" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Entertainment/mhsled.jpg" />
                <h3>Moving Head Series - LED</h3>
              </div>
            </Link>
            <Link to="/staticled" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Entertainment/staticled.avif" />
                <h3>Static LED</h3>
              </div>
            </Link>
            <Link to="/effectlight" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Entertainment/effectslight.avif" />
                <h3>Effects Light</h3>
              </div>
            </Link>
          </div>
          <p>Entertainment lighting is the art of using light to enhance performances, events, and spaces. It goes beyond basic illumination to create atmospheres that evoke emotions and amplify experiences. Through color, intensity, and movement, it transforms stages, concerts, and themed environments into immersive spectacles. Advanced technologies like LEDs and intelligent lighting control systems allow for precise, dynamic effects that sync with sound and narrative, captivating audiences and enhancing storytelling. Entertainment lighting designers collaborate closely with directors, producers, and performers to craft visual narratives that resonate, ensuring each moment is heightened with drama, emotion, and spectacle, making it an integral part of the entertainment experience.</p>
        </div>
      </div>
    </>
  )
}

export default Entertainment;