import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AdminLayout from "../../../../Layout/AdminLayout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";
const server = import.meta.env.VITE_SERVER;

const AdminHomeCarousel = () => {

  const { authorizationToken, homeCarousel, getAllHomeCarousel } = useAuth()


  const deleteHomeCarousel = async (id) => {
    try {
      const response = await fetch(`${server}api/v1/adminhomecontent/deletehomecarousel/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': authorizationToken,
        }
      })

      if (response.ok) {
        const res = await response.json()
        toast.success(res.message)
        getAllHomeCarousel()
      }
    } catch (error) {
      toast.error('Failed to Delete Home Carousel');
    }
  }



  useEffect(() => {
    getAllHomeCarousel()
  }, [])


  return (
    <>
      <AdminLayout />
      <div className="container my-5">
        <div className="w-100 d-flex justify-content-end my-5">
          <Link className="btn btn-warning" to="/addadmin_carousel" >Add Carousel</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Image URL</th>
              <th>Heading</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              homeCarousel.map((carousel) => {
                // { console.log(carousel._id); }
                return <tr key={carousel._id}>
                  <td className="message">{carousel.file.url}</td>
                  <td className="message">{carousel.heading}</td>
                  <td className="message">{carousel.description}</td>
                  <td><Link to="/editadminhomecarousel/:id" className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
                  <td><button className="bg-transparent" onClick={() => deleteHomeCarousel(carousel._id)} ><MdDelete className="bg-transparent" /></button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminHomeCarousel;