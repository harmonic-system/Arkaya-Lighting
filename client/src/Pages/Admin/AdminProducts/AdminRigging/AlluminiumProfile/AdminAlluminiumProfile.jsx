import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRigging } from "../../../../../store/Product/Rigging";
import { useAuth } from "../../../../../store/Auth";
import { useAuthContext } from "../../../../../store/authContext";

const AdminAlluminiumProfile = () => {

    const { token, server } = useAuthContext()
    const { alluminiumProfile, getAllAlluminiumProfileProducts } = useRigging()

    let count = 1


    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`${server}/api/v1/rigging/adminAlluminiumProfile/deletealluminiumprofile/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': token,
                }
            })

            if (response.ok) {
                const res = await response.json()
                toast.success(res.message)
                getAllAlluminiumProfileProducts()
            }
        } catch (error) {
            toast.error('Failed to Delete Product');
        }
    }



    useEffect(() => {
        getAllAlluminiumProfileProducts()
    }, [])


    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-3">Admin Alluminium Profile Products</h2>
                <div className="w-100 d-flex justify-content-end my-5">
                    <Link className="btn btn-warning" to="/admin/addalluminiumprofile" >Add Product</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Image URL</th>
                            <th>Product Name</th>
                            <th>Model</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alluminiumProfile.map((product) => {
                                // { console.log(product._id); }
                                return <tr key={product._id}>
                                    <td>{count++}</td>
                                    <td className="message">{product.productfile.url}</td>
                                    <td>{product.productname}</td>
                                    <td>{product.model}</td>
                                    <td>
                                        <table className="table border border-none">
                                            <tbody>
                                                <tr className="d-flex flex-column border-bottom-0">
                                                    <td className="message">{product.description.spec1}</td>
                                                    <td className="message">{product.description.spec2}</td>
                                                    <td className="message">{product.description.spec3}</td>
                                                    <td className="message">{product.description.spec4}</td>
                                                    <td className="message">{product.description.spec5}</td>
                                                    <td className="message">{product.description.spec6}</td>
                                                    <td className="message">{product.description.spec7}</td>
                                                    <td className="message">{product.description.spec8}</td>
                                                    <td className="message">{product.description.spec9}</td>
                                                    <td className="message">{product.description.spec10}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><Link to={`/admin/editalluminiumprofile/${product._id}`} className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
                                    {/* <td><button className="bg-transparent" onClick={() => deleteProduct(product._id)} ><MdDelete className="bg-transparent" /></button></td> */}
                                    <td>
                                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><MdDelete className="bg-transparent" /></button>

                                        {/* Modal */}
                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <h1 className="" style={{ fontSize: "12px" }}>Are you sure you want to delete this product?</h1>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-warning" onClick={() => deleteProduct(product._id)} >Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AdminAlluminiumProfile;