import { MdDelete } from "react-icons/md";
import { useAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminNewsLetter = () => {
  const { authorizationToken, server } = useAuth()
  const [allnewsletters, setAllNewsLetters] = useState([])

  const getAllNewsLetters = async () => {
    try {
      const response = await fetch(`${server}/api/v1/admin/getnewsletters`, {
        method: 'GET',
        headers: {
          'Authorization': authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(data);
      setAllNewsLetters(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const deleteNewsLetter = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/admin/deletenewsletter/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
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
                  <td><button className="bg-transparent" onClick={() => deleteNewsLetter(newsletter._id)} ><MdDelete className="bg-transparent" /></button></td>
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