import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";

const AdminHomeLProducts = () => {

  const { authorizationToken, homeProduct, getAllHomeProduct, server } = useAuth()
  let count = 1


  const deleteHomeProduct = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/adminhomecontent/deletehomeproduct/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        const res = await response.json()
        toast.success(res.message)
        getAllHomeProduct()
      }
    } catch (error) {
      toast.error('Failed to Delete Home Product');
    }
  }



  useEffect(() => {
    getAllHomeProduct()
  }, [])


  return (
    <>
      <div className="container my-5">
        <h2 className="fw-bold mb-3">Admin Home Products</h2>
        <div className="w-100 d-flex justify-content-end my-5">
          <Link className="btn btn-warning" to="/admin/addhomeproducts" >Add Product</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Image URL</th>
              <th>Product Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              homeProduct.map((product) => {
                return <tr key={product._id}>
                  <td>{count++}</td>
                  <td className="message">{product.file.url}</td>
                  <td>{product.productname}</td>
                  <td><Link to={`/admin/edithomeproducts/${product._id}`} className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
                  {/* <td><button className="bg-transparent" onClick={() => deleteHomeProduct(product._id)} ><MdDelete className="bg-transparent" /></button></td> */}
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
                            <h1 className="" style={{ fontSize: "12px" }}>Are you sure you want to delete this home product?</h1>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" onClick={() => deleteHomeProduct(product._id)} >Delete</button>
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

export default AdminHomeLProducts;