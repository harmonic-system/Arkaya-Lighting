import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../store/Auth";

const AdminHomeCarousel = () => {

  const { authorizationToken, homeCarousel, getAllHomeCarousel, server } = useAuth()


  const deleteHomeCarousel = async (id) => {
    try {
      const response = await fetch(`${server}/api/v1/adminhomecontent/deletehomecarousel/${id}`, {
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
      <div className="container my-5">
        <div className="w-100 d-flex justify-content-end my-5">
          <Link className="btn btn-warning" to="/admin/addhomecarousel" >Add Carousel</Link>
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