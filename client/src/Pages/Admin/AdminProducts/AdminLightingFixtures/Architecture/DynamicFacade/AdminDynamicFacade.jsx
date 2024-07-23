import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../../../store/Auth";
import { useLightingFixtures } from "../../../../../../store/Product/LightingFixture";

const AdminDynamicFacade = () => {

    const { authorizationToken, server } = useAuth()
    const { dynamicFacade, getAllDynamicFacadeProducts } = useLightingFixtures()

    let count = 1


    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`${server}/api/v1/lightingfixture/adminarchitecture/deletedynamicfacade/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': authorizationToken,
                }
            })

            if (response.ok) {
                const res = await response.json()
                toast.success(res.message)
                getAllDynamicFacadeProducts()
            }
        } catch (error) {
            toast.error('Failed to Delete Product');
        }
    }



    useEffect(() => {
        getAllDynamicFacadeProducts()
    }, [])


    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-3">Admin Dynamic Facade Products</h2>
                <div className="w-100 d-flex justify-content-end my-5">
                    <Link className="btn btn-warning" to="/admin/adddynamicfacade" >Add Product</Link>
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
                            dynamicFacade.map((product) => {
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
                                    <td><Link to={`/admin/editdynamicfacade/${product._id}`} className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
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

export default AdminDynamicFacade;