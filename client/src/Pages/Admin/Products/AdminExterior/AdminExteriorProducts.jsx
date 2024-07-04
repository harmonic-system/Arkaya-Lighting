import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import AdminLayout from "../../../../Layout/AdminLayout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";

const AdminExteriorProducts = () => {

  const { authorizationToken, exteriorProducts, getAllExteriorProducts, server } = useAuth()
  let count = 1


  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/adminproducts/deleteexteriorproducts/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        const res = await response.json()
        toast.success(res.message)
        getAllExteriorProducts()
      }
    } catch (error) {
      toast.error('Failed to Delete Product');
    }
  }



  useEffect(() => {
    getAllExteriorProducts()
  }, [])


  return (
    <>
      {/* <AdminLayout /> */}
      <div className="container my-5">
        <div className="w-100 d-flex justify-content-end my-5">
          <Link className="btn btn-warning" to="/admin/addexteriorproduct" >Add Product</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Sr No.</th>
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
              exteriorProducts.map((product) => {
                // { console.log(product._id); }
                return <tr key={product._id}>
                  <td>{count++}</td>
                  <td className="message">{product.productfile.url}</td>
                  <td>{product.productname}</td>
                  <td>{product.model}</td>
                  <td>
                    <table className="table border border-none">
                      <tbody>
                        <tr className="d-flex flex-column border-bottom-0" >
                          <td>{product.description.size}</td>
                          <td>{product.description.power}</td>
                          <td>{product.description.workingElectricity}</td>
                          <td>{product.description.controlMode}</td>
                          <td>{product.description.scheme}</td>
                          <td>{product.description.lampBeads}</td>
                          <td>{product.description.IPGrade}</td>
                          <td>{product.description.masterStroke}</td>
                          <td>{product.description.returnRoute}</td>
                          <td>{product.description.distanceFromCenter}</td>
                          <td>{product.description.lampshellFaceColor}</td>
                          <td>{product.description.noOfLight}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td><Link to={`/admin/editexteriorproduct/${product._id}`} className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
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

export default AdminExteriorProducts;

