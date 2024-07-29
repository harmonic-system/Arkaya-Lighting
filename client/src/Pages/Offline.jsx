import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const Offline = () => {
    return (
        <>
            {/* <div className="container d-flex justify-content-center align-items-center flex-column gap-5" style={{ width: "100vw", height: "90vh" }} >
                <h1 className="fw-bold text-center" style={{ fontSize: "4vw" }}></h1>
                <h1 className="fw-bold text-center" style={{ fontSize: "3vw" }}></h1>
                <h1 className="fw-bold text-center" style={{ fontSize: "3vw" }}></h1>

            </div> */}

            <div className="container" style={{ height: "80vh" }}>
                <div className="d-flex justify-content-center align-items-start flex-column h-100">
                    <h1>It looks like you've lost your connection to the internet.</h1>

                    <p className="fs-5 mb-5" style={{ fontFamily: "cursive" }}>Please check your network settings or try reconnecting to access our website.<br />

                        If you continue to experience issues, feel free to <Link to="/contact" className="text-warning">contact us</Link> for assistance. </p>
                    <PacmanLoader
                        color="#ffc221"
                        margin={1}
                        size="5vw"
                    />
                </div>
            </div>

        </>
    )
}

export default Offline;