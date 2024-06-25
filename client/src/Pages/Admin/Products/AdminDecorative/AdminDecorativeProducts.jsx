import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AdminLayout from "../../../../Layout/AdminLayout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";
const server = import.meta.env.VITE_SERVER;

const AdminDecorativeProducts = () => {

  const { authorizationToken, decorativeProducts, getAllDecorativeProducts } = useAuth()


  const deleteDecorativeProduct = async (id) => {
    try {
      const response = await fetch(`${server}api/v1/adminproducts/deletedecorativeproducts/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        const res = await response.json()
        toast.success(res.message)
        getAllDecorativeProducts()
      }
    } catch (error) {
      toast.error('Failed to Delete Newsletter');
    }
  }



  useEffect(() => {
    getAllDecorativeProducts()
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
              decorativeProducts.map((adminDecorativeProducts) => {
                // { console.log(adminDecorativeProducts._id); }
                return <tr key={adminDecorativeProducts._id}>
                  <td className="message">{adminDecorativeProducts.productfile.url}</td>
                  <td>{adminDecorativeProducts.productname}</td>
                  <td><Link to="/editadmindecorativeproduct/id" className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
                  <td><button className="bg-transparent" onClick={() => deleteDecorativeProduct(adminDecorativeProducts._id)} ><MdDelete className="bg-transparent" /></button></td>
                </tr>
              })
            }
          </tbody>
        </table>
        <div className="w-100 d-flex justify-content-end mt-5">
          <Link className="btn btn-warning" to="/addadmindecorativeproduct" >Add Product</Link>
        </div>
      </div>
    </>
  )
}

export default AdminDecorativeProducts;