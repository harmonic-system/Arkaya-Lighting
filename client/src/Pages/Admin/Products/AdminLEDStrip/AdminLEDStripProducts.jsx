import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import AdminLayout from "../../../../Layout/AdminLayout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";

const AdminLEDStripProducts = () => {

  const { authorizationToken, ledstripProducts, getAllLEDStripProducts,server } = useAuth()
  let count = 1


  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/adminproducts/deleteledstripproducts/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        const res = await response.json()
        toast.success(res.message)
        getAllLEDStripProducts()
      }
    } catch (error) {
      toast.error('Failed to Delete Product');
    }
  }



  useEffect(() => {
    getAllLEDStripProducts()
  }, [])


  return (
    <>
      {/* <AdminLayout /> */}
      <div className="container my-5">
        <div className="w-100 d-flex justify-content-end my-5">
          <Link className="btn btn-warning" to="/admin/addledstripproduct" >Add Product</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
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
              ledstripProducts.map((product) => {
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
                          <td>{product.description.des}</td>
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
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td><Link to="/admin/editledstripproduct/:id" className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
                  <td><button className="bg-transparent" onClick={() => deleteProduct(product._id)} ><MdDelete className="bg-transparent" /></button></td>
                  {/* {count++} */}
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminLEDStripProducts;

