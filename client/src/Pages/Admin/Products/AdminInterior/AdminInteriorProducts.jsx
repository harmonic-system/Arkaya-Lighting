import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AdminLayout from "../../../../Layout/AdminLayout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";
const server = import.meta.env.VITE_SERVER;

const AdminInteriorProducts = () => {

  const { authorizationToken, interiorProducts, getAllInteriorProducts } = useAuth()


  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${server}api/v1/adminproducts/deleteinteriorproducts/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        const res = await response.json()
        toast.success(res.message)
        getAllInteriorProducts()
      }
    } catch (error) {
      toast.error('Failed to Delete Product');
    }
  }



  useEffect(() => {
    getAllInteriorProducts()
  }, [])


  return (
    <>
      <AdminLayout />
      <div className="container my-5">
        <table className="table">
          <thead>
            <tr>
              <th>Image URL</th>
              <th>Product Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              interiorProducts.map((product) => {
                // { console.log(product._id); }
                return <tr key={product._id}>
                  <td className="message">{product.productfile.url}</td>
                  <td>{product.productname}</td>
                  <td><Link to="/editadmininteriorproduct/:id" className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
                  <td><button className="bg-transparent" onClick={() => deleteProduct(product._id)} ><MdDelete className="bg-transparent" /></button></td>
                </tr>
              })
            }
          </tbody>
        </table>
        <div className="w-100 d-flex justify-content-end mt-5">
          <Link className="btn btn-warning" to="/addadmininteriorproduct" >Add Product</Link>
        </div>
      </div>
    </>
  )
}

export default AdminInteriorProducts;

