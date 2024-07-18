import { MdDelete } from "react-icons/md";
import { useAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminProductQuery = () => {

  const { authorizationToken, server } = useAuth()
  const [allproductQueries, setAllProductQueries] = useState([])

  const getAllProductQueries = async () => {
    try {
      const response = await fetch(`${server}/api/v1/admin/getproductqueries`, {
        method: 'GET',
        headers: {
          'Authorization': authorizationToken,
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
          'Authorization': authorizationToken,
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
                  <td><button className="bg-transparent" onClick={() => deleteProductQuery(allproductQueries._id)} ><MdDelete className="bg-transparent" /></button></td>
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