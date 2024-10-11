import { MdDelete } from "react-icons/md";
import { useAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../store/authContext";

const AdminProductQuery = () => {

  const { token, server } = useAuthContext()
  const [allproductQueries, setAllProductQueries] = useState([])

  const getAllProductQueries = async () => {
    try {
      const response = await fetch(`${server}/api/v1/admin/getproductqueries`, {
        method: 'GET',
        headers: {
          'Authorization': token,
        },
      });
      const data = await response.json();
      // console.log(data);
      setAllProductQueries(data)
    } catch (error) {
      toast.error(error.message)
      // console.error('Error:', error);
    }
  }

  const deleteProductQuery = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/admin/deleteproductquery/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': token,
        }
      })

      if (response.ok) {
        toast.success('Product Query Deleted Successfully')
        getAllProductQueries()
      }
    } catch (error) {
      toast.error('Failed to Delete Product Query');
    }
  }

  useEffect(() => {
    getAllProductQueries()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Organization</th>
              <th>Querry</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allproductQueries.map((allproductQueries) => {
                return <tr key={allproductQueries._id}>
                  <td>{allproductQueries.productName}</td>
                  <td>{allproductQueries.name}</td>
                  <td>{allproductQueries.email}</td>
                  <td>{allproductQueries.phone}</td>
                  <td className="message" >{allproductQueries.organization}</td>
                  <td className="message" >{allproductQueries.query}</td>
                  
                  {/* <td><button className="bg-transparent" onClick={() => deleteProductQuery(allproductQueries._id)} ><MdDelete className="bg-transparent" /></button></td> */}
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
                            <h1 className="" style={{ fontSize: "12px" }}>Are you sure you want to delete this product query?</h1>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" onClick={() => deleteProductQuery(allproductQueries._id)} >Delete</button>
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

export default AdminProductQuery;