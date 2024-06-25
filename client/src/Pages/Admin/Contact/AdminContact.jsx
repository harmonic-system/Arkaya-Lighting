import { MdDelete } from "react-icons/md";
import { useAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminLayout from "../../../Layout/AdminLayout";
const server = import.meta.env.VITE_SERVER;

const AdminContact = () => {

  const { authorizationToken } = useAuth()
  const [allcontacts, setAllContacts] = useState([])

  const getAllContacts = async () => {
    try {
      const response = await fetch(`${server}api/v1/admin/getcontacts`, {
        method: 'GET',
        headers: {
          'Authorization': authorizationToken,
        },
      });
      const data = await response.json();
      console.log(data);
      setAllContacts(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${server}api/v1/admin/deletecontact/${id}`, {
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
      <AdminLayout />

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
                { console.log(contact); }
                return <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td className="message" >{contact.organization}</td>
                  <td className="message" >{contact.message}</td>
                  <td><button className="bg-transparent" onClick={() => deleteContact(contact._id)} ><MdDelete className="bg-transparent" /></button></td>
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