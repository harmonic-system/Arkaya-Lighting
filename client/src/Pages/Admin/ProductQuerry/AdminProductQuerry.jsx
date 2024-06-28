import { MdDelete } from "react-icons/md";
import { useAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminLayout from "../../../Layout/AdminLayout";
const server = import.meta.env.VITE_SERVER;

const AdminProductQuerry = () => {

  const { authorizationToken } = useAuth()
  const [allproductQuerries, setAllProductQuerries] = useState([])

  const getAllProductQuerries = async () => {
    try {
      const response = await fetch(`${server}api/v1/admin/getproductquerries`, {
        method: 'GET',
        headers: {
          'Authorization': authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(data);
      setAllProductQuerries(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const deleteProductQuerry = async (id) => {
    try {
      const response = await fetch(`${server}api/v1/admin/deleteproductquerry/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        toast.success('Product Querry Deleted Successfully')
        getAllProductQuerries()
      }
    } catch (error) {
      toast.error('Failed to Delete Product Querry');
    }
  }

  useEffect(() => {
    getAllProductQuerries()
  }, [])

  return (
    <>
      <AdminLayout />

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
              allproductQuerries.map((allproductQuerries) => {
                return <tr key={allproductQuerries._id}>
                  <td>{allproductQuerries.productName}</td>
                  <td>{allproductQuerries.name}</td>
                  <td>{allproductQuerries.email}</td>
                  <td>{allproductQuerries.phone}</td>
                  <td className="message" >{allproductQuerries.organization}</td>
                  <td className="message" >{allproductQuerries.querry}</td>
                  <td><button className="bg-transparent" onClick={() => deleteProductQuerry(allproductQuerries._id)} ><MdDelete className="bg-transparent" /></button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminProductQuerry;