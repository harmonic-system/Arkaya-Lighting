import React, { useState } from 'react';
import './QueryBox.css';
import { MdMessage } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import { useAuth } from '../../store/Auth';
import { RiWhatsappLine } from "react-icons/ri";

const QueryBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, server } = useAuth()


    const toggleChatBox = () => {
        setIsOpen(!isOpen);
    };

    const [queryData, setQueryData] = useState({
        productName: "",
        name: "",
        email: "",
        phone: "",
        organization: "",
        query: ""
    })

    const [userDetails, setUserDetails] = useState(true)

    if (user && userDetails) {
        setQueryData({
            productName: "",
            name: user.name,
            email: user.email,
            phone: user.phone,
            organization: "",
            query: ""
        })
        setUserDetails(false)
    }

    const handleChange = (e) => {
        setQueryData({
            ...queryData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        // console.log(queryData);

        try {
            const response = await fetch(`${server}/api/v1/productquery/singalproduct`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(queryData)
            })

            if (response.ok) {
                setQueryData({
                    productName: "",
                    name: "",
                    email: "",
                    phone: "",
                    organization: "",
                    query: ""
                })
                // setSent(true)
                const query_res = await response.json()
                toast.success(query_res.message)
            }

        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return (
        <div className="chat-box-container d-flex gap-3">
            <a className="whatsapp-icon" href="https://wa.me/+919873241041" title='Click To Chat On Whatsapp' target='_blank'><RiWhatsappLine style={{color:"#00a884"}}/></a>
            <div className="chat-icon" onClick={toggleChatBox} title='Click To Fill Enquiry Form'>
                {/* 💬 */}
                <MdMessage />
            </div>
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h4><b>Send Query</b></h4>
                        {/* <button onClick={toggleChatBox}>✖️</button> */}
                        <button className='bg-warning' onClick={toggleChatBox}><IoCloseSharp className='fs-3' /></button>
                    </div>
                    <div className="chat-body mt-5">
                        {/* <p>Hello! How can we help you?</p> */}
                        <form className="main_form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <input className="form-control rounded" onChange={handleChange} value={queryData.productName} placeholder="Product For Enquiry" type="text" name="productName" required />
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control rounded" onChange={handleChange} value={queryData.name} placeholder="Your name" type="text" name="name" required />
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control rounded" onChange={handleChange} value={queryData.email} placeholder="Email" type="email" name="email" required />
                                </div>
                                <div className=" col-md-12">
                                    <input className="form-control rounded" onChange={handleChange} value={queryData.phone} placeholder="Phone" type="number" name="phone" required />
                                </div>
                                <div className=" col-md-12">
                                    <input className="form-control rounded" onChange={handleChange} value={queryData.organization} placeholder="Organization Name (optional)" type="text" name="organization" />
                                </div>
                                <div className=" col-md-12">
                                    <textarea className="form-control rounded" onChange={handleChange} value={queryData.query} placeholder="Your Query" name="query" required ></textarea>
                                </div>
                                <div className=" col-md-12">
                                    <button type="submit" className="but rounded">Submit</button>
                                </div>
                            </div>
                        </form>
                        {/* Add chat functionality here */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QueryBox;

{/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-dark" id="staticBackdropLabel">Enquiry Form</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="contact">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                                            <form className="main_form" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <input className="form-control rounded" value={productname} placeholder="Product For Enquiry" type="text" name="productName" required />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control rounded" onChange={handleChange} value={queryData.name} placeholder="Your name" type="text" name="name" required />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input className="form-control rounded" onChange={handleChange} value={queryData.email} placeholder="Email" type="email" name="email" required />
                                                    </div>
                                                    <div className=" col-md-12">
                                                        <input className="form-control rounded" onChange={handleChange} value={queryData.phone} placeholder="Phone" type="text" name="phone" required />
                                                    </div>
                                                    <div className=" col-md-12">
                                                        <input className="form-control rounded" onChange={handleChange} value={queryData.organization} placeholder="Organization Name (optional)" type="text" name="organization" />
                                                    </div>
                                                    <div className=" col-md-12">
                                                        <textarea className="form-control rounded" onChange={handleChange} value={queryData.query} placeholder="Your Query" name="query" required ></textarea>
                                                    </div>
                                                    <div className=" col-md-12">
                                                        <button type="submit" className="but rounded">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div > */}