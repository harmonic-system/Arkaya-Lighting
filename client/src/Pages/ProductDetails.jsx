import { useState } from "react"
import { toast } from "react-toastify";
import { useAuthContext } from "../store/authContext";

const ProductDetails = () => {

  const [queryData, setQueryData] = useState({
    productName: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
    query: ""
  })

  const [sent, setSent] = useState(false)
  const { server } = useAuthContext()


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setQueryData({
      ...queryData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      const response = await fetch(`${server}/api/v1/productquery/singalproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queryData)
      })

      if (response.ok) {
        setQueryData({
          productName: "",
          name: "",
          email: "",
          phone: "",
          organization: "",
          query: ""
        })
        setSent(true)
      }
      const contact_res = await response.json()
      toast.success(contact_res.message)

    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <>
      <div className="container my-5">
        {sent ?
          (<div className="row choose_bg p-3 d-flex justify-content-center align-items-center">
            <p className="text-center text-success fw-bold">Thanks For Raising Query About This Product In Arkaya Lighting !!! Our Executive Will Contact You Soon.</p>
          </div>)
          :
          (<div className="row choose_bg p-3 d-flex justify-content-evenly align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-around align-items-center">
              <h3>To get More Details Please Click On Enquiry</h3>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-around align-items-center">
              <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Enquiry</button>
            </div>
          </div>)
        }


        {/* Model Body Start */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-dark" id="staticBackdropLabel">Enquiry Form</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="contact">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <form className="main_form" onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-md-12">
                              <input className="form-control rounded" onChange={handleChange} value={queryData.productName} placeholder="Product For Enquiry" type="text" name="productName" required />
                            </div>
                            <div className="col-md-12">
                              <input className="form-control rounded" onChange={handleChange} value={queryData.name} placeholder="Your name" type="text" name="name" required />
                            </div>
                            <div className="col-md-12">
                              <input className="form-control rounded" onChange={handleChange} value={queryData.email} placeholder="Email" type="email" name="email" required />
                            </div>
                            <div className=" col-md-12">
                              <input className="form-control rounded" onChange={handleChange} value={queryData.phone} placeholder="Phone" type="text" name="phone" required />
                            </div>
                            <div className=" col-md-12">
                              <input className="form-control rounded" onChange={handleChange} value={queryData.organization} placeholder="Organization Name (optional)" type="text" name="organization" />
                            </div>
                            <div className=" col-md-12">
                              <textarea className="form-control rounded" onChange={handleChange} value={queryData.query} placeholder="Your Query" name="query" ></textarea>
                            </div>
                            <div className=" col-md-12">
                              <button type="submit" className="but rounded">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
        {/* Model Body End */}


        <div div className="row my-5" >
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <img src="./images/Picture1.png" alt="" className="w-100" />
          </div>

          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
            <div className="container">
              <h1>Product Name</h1>

              <h3>About This Product</h3>
              <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, dolorum vero quos amet velit accusantium culpa aut, eveniet ratione distinctio laborum tenetur beatae soluta. Labore quos rem deleniti libero nostrum.
                Blanditiis, eum tempora porro sed cumque vitae. Porro beatae doloremque voluptatem voluptatibus illo, nostrum natus! Sequi, culpa quam quaerat similique magni impedit fugit incidunt alias. Fuga ab quisquam provident perspiciatis.
                Commodi libero veritatis aut, a illo nam facilis. Sed, similique incidunt, praesentium fugit iste qui quae mollitia nemo dolore soluta accusantium eos delectus illum, natus quas. Accusantium quam molestias error.</p>
              <h3>Why To Buy</h3>
              <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, dolorum vero quos amet velit accusantium culpa aut, eveniet ratione distinctio laborum tenetur beatae soluta. Labore quos rem deleniti libero nostrum.
                Blanditiis, eum tempora porro sed cumque vitae. Porro beatae doloremque voluptatem voluptatibus illo, nostrum natus! Sequi, culpa quam quaerat similique magni impedit fugit incidunt alias. Fuga ab quisquam provident perspiciatis.
                Commodi libero veritatis aut, a illo nam facilis. Sed, similique incidunt, praesentium fugit iste qui quae mollitia nemo dolore soluta accusantium eos delectus illum, natus quas. Accusantium quam molestias error.</p>
            </div>
          </div>

        </div >

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 m-auto">
            <div className="container-fluid">
              <h3>More Images</h3>
              <div className="row product_details border border-secondary p-3">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 product-more-images">
                  <img src="./images/Picture1.png" alt="" className='product-more-images' />
                </div>
              </div>
            </div >
          </div>
        </div>




        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 m-auto">
            <div className="container">
              <h3>Product Parameter</h3>
              <div className="container">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam perferendis sit quia vitae unde temporibus debitis nostrum, dolores ipsa. Facilis numquam labore nulla natus doloremque tempore temporibus voluptas sapiente fugit?
                  Voluptatibus, officia nemo. Ad harum labore ducimus! Praesentium quas labore possimus quod nihil eum voluptate a incidunt odit, natus, aspernatur quaerat distinctio consequatur, illo similique vitae quidem ab alias dolor!
                  Facilis accusamus similique quia, voluptas, quae expedita hic quaerat enim soluta, odit deleniti eos eveniet voluptatibus temporibus quisquam corrupti minus at non! Minus quo nulla animi labore nam sapiente tempora!
                  Ut non accusamus doloribus illum incidunt ea harum unde necessitatibus dolor illo saepe adipisci, mollitia ex rem deleniti nam officia. Sequi eos consequuntur quia laborum cum? Expedita placeat necessitatibus adipisci!
                  Deserunt nemo facilis quas earum autem blanditiis sunt minima aspernatur! Accusamus porro asperiores corrupti! Excepturi assumenda accusamus atque, dolorem numquam sapiente illum beatae hic alias, ducimus eveniet exercitationem aut officiis?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="whyschose">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title w-100">
                  <h2>Downloads</h2>
                  <span>Find and download all technical and marketing documents related to this product.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="choose_bg">
          <div className="container">
            <div className="white_bg">
              <div className="row">

                <a href="" download className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="for_box border border-secondary rounded p-2">
                    <i><span className="material-symbols-outlined">description</span></i>
                    <h3>Data Sheet</h3>
                  </div>
                </a>

                <a href="" download className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="for_box border border-secondary rounded p-2">
                    <i><span className="material-symbols-outlined">stack_star</span></i>
                    <h3>Manual</h3>
                  </div>
                </a>

                <a href="" download className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="for_box border border-secondary rounded p-2">
                    <i><span className="material-symbols-outlined">developer_guide</span></i>
                    <h3>Cataloge</h3>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>

        <div className="whyschose">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title w-100">
                  <h2>Technical Specification</h2>
                  <span>Find all Technical Specification related to this product.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="choose_bg">
          <div className="container">
            <div className="white_bg">
              <div className="row">
                <div className="col-sm-12">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Light Source
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                          <p className="text-secondary">Cree/Osram/Epistar/Bridgelux</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Light Color
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary">1800K - 7500K, RGB, RGBW</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          LED Types
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary">SMD5050 / SMD3535</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Accordion Item #4
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary">1800K - 7500K, RGB, RGBW</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-6 col-md-12 d-flex m-auto">
          <button className="read-more">Add To Cart</button>
          <button className="read-more">Buy Now</button>
        </div>







      </div >




    </>
  )
}

export default ProductDetails




