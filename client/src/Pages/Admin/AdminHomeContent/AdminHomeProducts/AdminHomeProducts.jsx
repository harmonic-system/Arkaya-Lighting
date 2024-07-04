import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";

const AdminHomeLProducts = () => {

  const { authorizationToken, homeProduct, getAllHomeProduct, server } = useAuth()


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
        <div className="w-100 d-flex justify-content-end my-5">
          <Link className="btn btn-warning" to="/admin/addhomeproducts" >Add Product</Link>
        </div>
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
              homeProduct.map((product) => {
                { console.log(product._id) }
                { console.log(product.file.public_id) }
                return <tr key={product._id}>
                  <td className="message">{product.file.url}</td>
                  <td>{product.productname}</td>
                  <td><Link to="/editadminhomeproducts/:id" className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
                  <td><button className="bg-transparent" onClick={() => deleteHomeProduct(product._id)} ><MdDelete className="bg-transparent" /></button></td>
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