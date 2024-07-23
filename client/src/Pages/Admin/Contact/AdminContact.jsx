import { MdDelete } from "react-icons/md";
import { useAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminContact = () => {

  const { authorizationToken, server } = useAuth()
  const [allcontacts, setAllContacts] = useState([])

  const getAllContacts = async () => {
    try {
      const response = await fetch(`${server}/api/v1/admin/getcontacts`, {
        method: 'GET',
        headers: {
          'Authorization': authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(data);
      setAllContacts(data)
    } catch (error) {
      toast.error(error.message)
      // console.error('Error:', error);
    }
  }

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/admin/deletecontact/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        toast.success('Contact Deleted Successfully')
        getAllContacts()
      }
    } catch (error) {
      toast.error('Failed to Delete Contact');
    }
  }

  useEffect(() => {
    getAllContacts()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Organization</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allcontacts.map((contact) => {
                return <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td className="message" >{contact.organization}</td>
                  <td className="message" >{contact.message}</td>
                  {/* <td><button className="bg-transparent" onClick={() => deleteContact(contact._id)} ><MdDelete className="bg-transparent" /></button></td> */}
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
                            <h1 className="" style={{ fontSize: "12px" }}>Are you sure you want to delete this contact?</h1>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" onClick={() => deleteContact(contact._id)} >Delete</button>
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

export default AdminContact;