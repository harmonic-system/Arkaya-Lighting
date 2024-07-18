import { Link } from "react-router-dom"

const Architecture = () => {
  return (
    <>
      <div className="products-image mb-5">
        <div className="container">
          <div className="row">
            <Link to="/commercial" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/Commercials.png" />
                <h3>Commercials</h3>
              </div>
            </Link>
            <Link to="/dynamicfacade" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/Dynamicfacade.jpg" />
                <h3>Dynamic Facade</h3>
              </div>
            </Link>
            <Link to="/landscapes" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/Landscapes.jpg" />
                <h3>Landscapes</h3>
              </div>
            </Link>
            <Link to="/museums" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/museums.jpg" />
                <h3>Museums</h3>
              </div>
            </Link>
            <Link to="/residential" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/residentials.avif" />
                <h3>Residentials</h3>
              </div>
            </Link>
          </div>
          <p>
          Architecture lighting plays a pivotal role in shaping the ambiance and functionality of spaces. Beyond mere illumination, it accentuates architectural features, guides circulation, and enhances user experience. From natural daylight integration to artificial solutions like LEDs, it balances practical needs with aesthetic intent, creating dynamic environments that evolve throughout the day. Thoughtful lighting design considers energy efficiency, sustainability, and human well-being, aligning with the architectural vision to foster comfort and visual appeal. Whether highlighting textures, defining volumes, or setting moods, architecture lighting transforms spaces into engaging, functional, and visually striking settings that resonate with their occupants.</p>
        </div>
      </div>
    </>
  )
}

export default Architecture