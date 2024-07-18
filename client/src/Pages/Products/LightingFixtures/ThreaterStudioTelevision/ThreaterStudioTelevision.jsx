import { Link } from "react-router-dom";

const ThreaterStudioTelevision = () => {
  return (
    <>
      <div className="products-image mb-5">
        <div className="container">
          <div className="row">
            <Link to="/threater" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/threaterstudiotelevision/threater.jpg" />
                <h3>Threater</h3>
              </div>
            </Link>
            <Link to="/studio" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/threaterstudiotelevision/studio.jpg" />
                <h3>Studio</h3>
              </div>
            </Link>
            <Link to="/television" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/threaterstudiotelevision/television.jpg" />
                <h3>Television</h3>
              </div>
            </Link>
          </div>
          <p>Theater, studio, and television lighting are crucial for creating immersive experiences and enhancing visual storytelling. In theaters, lighting sets the mood, directs attention, and defines the atmosphere, supporting performances and conveying emotions. It utilizes spotlights, floods, and color gels to sculpt scenes dynamically. Television and studio lighting ensure clarity, consistency, and visual appeal for broadcasts. Advanced technologies like LED panels and programmable fixtures enable precise control over brightness, color temperature, and effects, accommodating diverse production needs. Both disciplines merge artistry with technical precision to illuminate actors, sets, and stages effectively, enriching the viewer's engagement and enhancing the overall production quality.</p>
        </div>
      </div>
    </>
  )
}

export default ThreaterStudioTelevision;