import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import AdminLayout from "../../../../Layout/AdminLayout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";

const AdminEntertainmentProducts = () => {

  const { authorizationToken, entertainmentProducts, getAllEntertainmentProducts, server } = useAuth()
  let count = 1


  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/adminproducts/deleteentertainmentproducts/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        const res = await response.json()
        toast.success(res.message)
        getAllEntertainmentProducts()
      }
    } catch (error) {
      toast.error('Failed to Delete Product');
    }
  }



  useEffect(() => {
    getAllEntertainmentProducts()
  }, [])


  return (
    <>
      {/* <AdminLayout /> */}
      <div className="container my-5">
      <h2 className="fw-bold mb-3">Admin Entertainment Products</h2>
        <div className="w-100 d-flex justify-content-end my-5">
          <Link className="btn btn-warning" to="/admin/addentertainmentproduct" >Add Product</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image URL</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              entertainmentProducts.map((product) => {
                // { console.log(product._id); }
                return <tr key={product._id}>
                  <td>{count++}</td>
                  <td className="message">{product.productfile.url}</td>
                  <td className="message">{product.productname}</td>
                  <td className="message">{product.category}</td>
                  <td className="message">{product.description}</td>
                  <td><Link to={`/admin/editentertainmentproduct/${product._id}`} className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
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

export default AdminEntertainmentProducts;

