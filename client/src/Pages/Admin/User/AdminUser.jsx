import { MdDelete } from "react-icons/md";
import { useAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import AdminLayout from "../../../Layout/AdminLayout";

const AdminUser = () => {

  const { authorizationToken, server } = useAuth()
  const [allusers, setAllUsers] = useState([])

  const getAllUsers = async () => {
    try {
      const response = await fetch(`${server}/api/v1/admin/getusers`, {
        method: 'GET',
        headers: {
          'Authorization': authorizationToken,
        },
      });
      const data = await response.json();
      setAllUsers(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/admin/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        toast.success('User Deleted Successfully')
        getAllUsers()
      }
    } catch (error) {
      toast.error('Failed to Delete User');
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      {/* <AdminLayout /> */}

      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allusers.map((user) => {
                return <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td><button className="bg-transparent" onClick={() => deleteUser(user._id)} ><MdDelete className="bg-transparent" /></button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminUser;