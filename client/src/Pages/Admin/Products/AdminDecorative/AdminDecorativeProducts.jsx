import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import AdminLayout from "../../../../Layout/AdminLayout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";
import { useAuthContext } from "../../../../store/authContext";

const AdminDecorativeProduct = () => {

  const { token, decorativeProducts, getAllDecorativeProducts, server } = useAuthContext()
  let count = 1


  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/adminproducts/deletedecorativeproducts/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': token,
        }
      })

      if (response.ok) {
        const res = await response.json()
        toast.success(res.message)
        getAllDecorativeProducts()
      }
    } catch (error) {
      toast.error('Failed to Delete Product');
    }
  }



  useEffect(() => {
    getAllDecorativeProducts()
  }, [])


  return (
    <>
      {/* <AdminLayout /> */}
      <div className="container my-5">
        <h2 className="fw-bold mb-3">Admin Decorative Products</h2>
        <div className="w-100 d-flex justify-content-end my-5">
          <Link className="btn btn-warning" to="/admin/adddecorativeproduct" >Add Product</Link>
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
              decorativeProducts.map((product) => {
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
                          <td>{product.description.spec1}</td>
                          <td>{product.description.spec2}</td>
                          <td>{product.description.spec3}</td>
                          <td>{product.description.spec4}</td>
                          <td>{product.description.spec5}</td>
                          <td>{product.description.spec6}</td>
                          <td>{product.description.spec7}</td>
                          <td>{product.description.spec8}</td>
                          <td>{product.description.spec9}</td>
                          <td>{product.description.spec10}</td>
                          <td>{product.description.spec11}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td><Link to={`/admin/editdecorativeproduct/${product._id}`} className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
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

export default AdminDecorativeProduct;