import { useEffect, useState } from "react"
import { useAuth } from "../../store/Auth"
import { toast } from "react-toastify"

const QueryForm = ({ productname }) => {
    // console.log(productname);

    const [queryData, setQueryData] = useState({
        productName: "",
        name: "",
        email: "",
        phone: "",
        organization: "",
        query: ""
    })

    function getName() {
        const nameof = productname

        return nameof
    }

    // const [sent, setSent] = useState(false)
    const { server } = useAuth()


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
        // console.log(productname);
        // console.log(queryData);

        try {
            const response = await fetch(`${server}/api/v1/productquery/singalproduct`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productName: productname,
                    queryData: queryData
                })
            })

            if (response.ok) {
                setQueryData({
                    name: "",
                    email: "",
                    phone: "",
                    organization: "",
                    query: ""
                })
                // setSent(true)
                const contact_res = await response.json()
                toast.success(contact_res.message)
            }

        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    useEffect(() => {

        function getName() {
            const nameof = productname
    
            return nameof
        }

        const exampleModal = document.getElementById('exampleModal')
        if (exampleModal) {
            exampleModal.addEventListener('show.bs.modal', event => {
                // Button that triggered the modal
                const button = event.relatedTarget
                // Extract info from data-bs-* attributes
                const recipient = button.getAttribute('data-bs-whatever')
                // If necessary, you could initiate an Ajax request here
                // and then do the updating in a callback.

                // Update the modal's content.
                const modalTitle = exampleModal.querySelector('.modal-title')
                const modalBodyInput = exampleModal.querySelector('.modal-body input')

                modalTitle.textContent = `New message to ${recipient}`
                modalBodyInput.value = recipient
            })
        }

    }, [productname])





    return (
        <>
            {/* <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Enquiry for {productname}</button> */}

            {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                                        <input className="form-control rounded" value={productname} placeholder="Product For Enquiry" type="text" name="productName" required />
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
                                                        <textarea className="form-control rounded" onChange={handleChange} value={queryData.query} placeholder="Your Query" name="query" required ></textarea>
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
            </div > */}

            

        </>
    )

}

export default QueryForm