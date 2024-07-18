import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../store/Auth";

const AdminApplication = () => {

    const { authorizationToken, server, application, getAllApplications } = useAuth()

    let count = 1


    const deleteApplication = async (id) => {
        try {
            const response = await fetch(`${server}/api/v1/adminapplication/deleteapplication/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': authorizationToken,
                }
            })

            if (response.ok) {
                const res = await response.json()
                toast.success(res.message)
                getAllApplications()
            }
        } catch (error) {
            toast.error('Failed to Delete Application');
        }
    }

    useEffect(() => {
        getAllApplications()
    }, [])


    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-3">Admin Applications</h2>
                <div className="w-100 d-flex justify-content-end my-5">
                    <Link className="btn btn-warning" to="/admin/addapplication" >Add Application</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Image URL</th>
                            <th>Heading</th>
                            <th>About</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            application.map((application) => {
                                // { console.log(application._id); }
                                return <tr key={application._id}>
                                    <td>{count++}</td>
                                    <td className="message">{application.applicationfile.url}</td>
                                    <td>{application.heading}</td>
                                    <td>{application.about}</td>
                                    <td><Link to={`/admin/editapplication/${application._id}`} className="bg-transparent" ><FaEdit className="bg-transparent" /></Link></td>
                                    <td><button className="bg-transparent" onClick={() => deleteApplication(application._id)} ><MdDelete className="bg-transparent" /></button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AdminApplication;