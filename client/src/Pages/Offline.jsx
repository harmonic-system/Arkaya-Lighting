import PacmanLoader from "react-spinners/PacmanLoader";

const Offline = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center flex-column gap-5" style={{ width: "100vw", height: "90vh" }} >
                <h1 className="fw-bold text-center" style={{ fontSize: "4vw" }}>It's Seems Like You Are Offline </h1>
                <h1 className="fw-bold text-center" style={{ fontSize: "3vw" }}>Please Connect To Network And Try Again</h1>
                <PacmanLoader
                    color="#ffc221"
                    margin={1}
                    size="5vw"
                />
            </div>
        </>
    )
}

export default Offline;