import { Link } from "react-router-dom";

const LEDPixels = () => {
  return (
    <>
      <div className="products-image mb-5">
        <div className="container">
          <div className="row">
            <Link to="/strips" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/LEDPixels/strip.avif" />
                <h3>Strips</h3>
              </div>
            </Link>
            <Link to="/dotpixels" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/LEDPixels/dotpixel.jpg" />
                <h3>DOT Pixels</h3>
              </div>
            </Link>
            <Link to="/ledmatrix" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/LEDPixels/ledmatrix.jpg" />
                <h3>LED Matrix</h3>
              </div>
            </Link>
          </div>
          <p>LED pixel lighting revolutionizes visual displays by combining individual LEDs into programmable units, known as pixels. Each pixel can emit its own color and brightness, enabling intricate patterns, animations, and dynamic effects previously impossible with traditional lighting. Used in large-scale displays, concerts, architectural lighting, and signage, LED pixels offer versatility and creativity. They enhance visual impact through seamless integration, precise control, and synchronization with music or video, transforming static environments into dynamic, interactive experiences. This technology's flexibility in design and energy efficiency has made it a preferred choice for creating immersive lighting installations that engage and captivate audiences worldwide.</p>
        </div>
      </div>
    </>
  )
}

export default LEDPixels;