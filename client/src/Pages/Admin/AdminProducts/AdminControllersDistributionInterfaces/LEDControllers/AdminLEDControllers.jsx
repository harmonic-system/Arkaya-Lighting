import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../../store/Auth";
import { useCDI } from "../../../../../store/Product/CDI";

const AdminLEDControllers = () => {

    const { authorizationToken, server } = useAuth()
    const { ledControllers, getAllLedControllersProducts } = useCDI()

    let count = 1


    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`${server}/api/v1/controllerdistributioninterfaces/adminledcontrollers/deleteledcontroller/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': authorizationToken,
                }
            })

            if (response.ok) {
                const res = await response.json()
                toast.success(res.message)
                getAllLedControllersProducts()
            }
        } catch (error) {
            toast.error('Failed to Delete Product');
        }
    }



    useEffect(() => {
        getAllLedControllersProducts()
    }, [])


    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-3">Admin LED Controllers Products</h2>
                <div className="w-100 d-flex justify-content-end my-5">
                    <Link className="btn btn-warning" to="/admin/addledcontroller" >Add Product</Link>
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
                            ledControllers.map((product) => {
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
                                    <td><Link to={`/admin/editledcontroller/${product._id}`} className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
                                    <td><button className="bg-transparent" onClick={() => deleteProduct(product._id)} ><MdDelete className="bg-transparent" /></button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AdminLEDControllers;