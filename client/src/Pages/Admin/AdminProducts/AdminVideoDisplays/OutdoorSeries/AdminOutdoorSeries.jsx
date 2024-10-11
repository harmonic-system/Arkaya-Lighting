import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../../store/Auth";
import { useVideoDisplays } from "../../../../../store/Product/VideoDisplay";
import { useAuthContext } from "../../../../../store/authContext";

const AdminOutdoorSeries = () => {

    const { token, server } = useAuthContext()
    const { outdoorSeries, getAllOutdoorSeriesProducts } = useVideoDisplays()

    let count = 1


    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`${server}/api/v1/videodisplays/adminOutdoorSeries/deleteoutdoorseries/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': token,
                }
            })

            if (response.ok) {
                const res = await response.json()
                toast.success(res.message)
                getAllOutdoorSeriesProducts()
            }
        } catch (error) {
            toast.error('Failed to Delete Product');
        }
    }



    useEffect(() => {
        getAllOutdoorSeriesProducts()
    }, [])


    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-3">Admin Outdoor Series Products</h2>
                <div className="w-100 d-flex justify-content-end my-5">
                    <Link className="btn btn-warning" to="/admin/addoutdoorseries" >Add Product</Link>
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
                            outdoorSeries.map((product) => {
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
                                                    <td className="message">{product.description.moduleSize}</td>
                                                    <td className="message">{product.description.pixelPitch}</td>
                                                    <td className="message">{product.description.pixelDensity}</td>
                                                    <td className="message">{product.description.configuration}</td>
                                                    <td className="message">{product.description.mode}</td>
                                                    <td className="message">{product.description.resolution}</td>
                                                    <td className="message">{product.description.driveType}</td>
                                                    <td className="message">{product.description.refFreq}</td>
                                                    <td className="message">{product.description.scanMode}</td>
                                                    <td className="message">{product.description.portType}</td>
                                                    <td className="message">{product.description.brigthness}</td>
                                                    <td className="message">{product.description.renFix}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td><Link to={`/admin/editoutdoorseries/${product._id}`} className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
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

export default AdminOutdoorSeries;