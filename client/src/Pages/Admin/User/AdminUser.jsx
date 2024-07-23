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
      toast.error(error.message)
      // console.error('Error:', error);
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
                  {/* <td><button className="bg-transparent" onClick={() => deleteUser(user._id)} ><MdDelete className="bg-transparent" /></button></td> */}
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
                            <h1 className="" style={{ fontSize: "12px" }}>Are you sure you want to delete this user?</h1>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" onClick={() => deleteUser(user._id)} >Delete</button>
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

export default AdminUser;