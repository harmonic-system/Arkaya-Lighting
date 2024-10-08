import { Link } from "react-router-dom"

const TempArchitecture = () => {
    return (
        <>
            <div className="products-image mb-5">
                <div className="container">
                    <div className="row">
                        <Link to="/floodlight" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="products-image-box">
                                <img src="images/products/Architecture/temp/flood-light.jpg" />
                                <h3>Flood Lights</h3>
                            </div>
                        </Link>
                        <Link to="/undergroundlight" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="products-image-box">
                                <img src="images/products/Architecture/temp/underground-Light.jpg" />
                                <h3>Underground Lights</h3>
                            </div>
                        </Link>
                        <Link to="/underwaterlight" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="products-image-box">
                                <img src="images/products/Architecture/temp/underwater-lights.jpeg" />
                                <h3>Underwater Lights</h3>
                            </div>
                        </Link>
                        <Link to="/wallwasher" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="products-image-box">
                                <img src="images/products/Architecture/temp/wall-washer.jpg" />
                                <h3>Wall Washer Lights</h3>
                            </div>
                        </Link>
                        <Link to="/treehanging" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="products-image-box">
                                <img src="images/products/Architecture/temp/tree-hugging.jpg" />
                                <h3>Tree Hanging Lights</h3>
                            </div>
                        </Link>
                        <Link to="/mediapixel" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="products-image-box">
                                <img src="images/products/Architecture/temp/media-pixels.jpeg" />
                                <h3>Media Pixels Light</h3>
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

export default TempArchitecture