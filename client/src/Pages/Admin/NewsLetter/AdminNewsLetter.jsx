import { MdDelete } from "react-icons/md";
import { useAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../store/authContext";

const AdminNewsLetter = () => {
  const { token, server } = useAuthContext()
  const [allnewsletters, setAllNewsLetters] = useState([])

  const getAllNewsLetters = async () => {
    try {
      const response = await fetch(`${server}/api/v1/admin/getnewsletters`, {
        method: 'GET',
        headers: {
          'Authorization': token,
        },
      });
      const data = await response.json();
      // console.log(data);
      setAllNewsLetters(data)
    } catch (error) {
      toast.error(error.message)
      // console.error('Error:', error);
    }
  }

  const deleteNewsLetter = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/admin/deletenewsletter/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': token,
        }
      })

      if (response.ok) {
        toast.success('Newsletter Deleted Successfully')
        getAllNewsLetters()
      }
    } catch (error) {
      toast.error('Failed to Delete Newsletter');
    }
  }

  useEffect(() => {
    getAllNewsLetters()
  }, [])


  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allnewsletters.map((newsletter) => {
                return <tr key={newsletter._id}>
                  <td>{newsletter.newsletteremail}</td>
                  {/* <td><button className="bg-transparent" onClick={() => deleteNewsLetter(newsletter._id)} ><MdDelete className="bg-transparent" /></button></td> */}
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
                            <h1 className="" style={{ fontSize: "12px" }}>Are you sure you want to delete this newsletter?</h1>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" onClick={() => deleteNewsLetter(newsletter._id)} >Delete</button>
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

export default AdminNewsLetter;