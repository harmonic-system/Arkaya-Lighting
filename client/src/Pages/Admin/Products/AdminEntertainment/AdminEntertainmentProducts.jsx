import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AdminLayout from "../../../../Layout/AdminLayout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";
const server = import.meta.env.VITE_SERVER;

const AdminEntertainmentProducts = () => {

  const { authorizationToken, entertainmentProducts, getAllEntertainmentProducts } = useAuth()


  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${server}api/v1/adminproducts/deleteentertainmentproducts/${id}`, {
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
      <AdminLayout />
      <div className="container my-5">
        <div className="w-100 d-flex justify-content-end my-5">
          <Link className="btn btn-warning" to="/addadminentertainmentproduct" >Add Product</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
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
                  <td className="message">{product.productfile.url}</td>
                  <td className="message">{product.productname}</td>
                  <td className="message">{product.category}</td>
                  <td className="message">{product.description}</td>
                  <td><Link to="/editadminentertainmentproduct/:id" className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
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

