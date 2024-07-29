const Breadcrumb = ({ first, second, third, last }) => {
    return (
        <>
            <nav aria-label="" style={{ height: "10vw" }}>
                <ol className="bg-warning d-flex justify-content-center align-items-center h-100">
                    <li className="" style={{ fontSize: "2vw" }}><a href="#"><b>{first}</b></a></li>
                    <li className="" style={{ fontSize: "2vw" }}><a href="#"><b>{second}</b></a></li>
                    <li className="" style={{ fontSize: "2vw" }}><a href="#"><b>{third}</b></a></li>
                    <li className="active" aria-current="page" style={{ fontSize: "2vw" }}><b>{last}</b></li>
                </ol>
            </nav>
        </>
    )
}

export default Breadcrumb