const Shimmer = () => {
  return (
    <>
      <div className="product-bg">
        <div className="product-bg-white">
          <div className="container">
            <div className="row d-flex justify-content-around align-items-center"></div>
            <div className="card" aria-hidden="true">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="disabled placeholder col-6" aria-disabled="true"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shimmer;