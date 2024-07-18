import { Link } from "react-router-dom";

const Decorative = () => {
  return (
    <>
      <div className="products-image mb-5">
        <div className="container">
          <div className="row">
            <Link to="/chandeliers" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/decorative/chandeliers.PNG" />
                <h3>Chandeliers</h3>
              </div>
            </Link>
          </div>
          <p>Chandeliers embody elegance and sophistication in lighting design, historically serving as ornate centerpieces in grand interiors. These fixtures feature multiple arms adorned with crystals, glass, or other materials, suspended from the ceiling. They provide ambient and focal illumination, often complementing formal dining rooms, ballrooms, and entryways with their dazzling presence. Modern interpretations range from traditional to contemporary styles, offering versatility in size and finish to suit diverse interior aesthetics. Beyond their decorative appeal, chandeliers evoke a sense of luxury and timeless beauty, creating a captivating interplay of light and shadow that enhances the ambiance and architectural details of any space they adorn.</p>
        </div>
      </div>
    </>
  )
}

export default Decorative;