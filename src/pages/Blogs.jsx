import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Card from '../components/Card';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Blogs() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [form, setForm] = useState(false);
    const [blog, setBlog] = useState([]);
    const [formField, setFormField] = useState({
        title: '',
        description: '',
        file: null,
    })
    const { user } = useAuth0();
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file' && files && files.length > 0) {
            setFormField({
                ...formField,
                [name]: files[0],
            })
        } else {
            setFormField({
                ...formField,
                [name]: value,
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('userId', user.sub);
        formData.append('username', user.nickname);
        formData.append('userImage', user.picture)
        formData.append('title', formField.title);
        formData.append('description', formField.description);
        formData.append('file', formField.file);
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:3000/createblog', formData);
            setFormField({
                title: '',
                description: '',
                file: null,
            });
            fetchData();
            document.getElementById('fileInput').value = '';

        } catch (error) {
            console.error('Error submitting form:', error);
        }
       
    };
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getblog');
            setBlog(response.data);
        } catch (err) {
            console.log('error in getblog frontend side:', err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleDelete = async (_id) => {
        console.log('hey')
        try {
            const { data } = await axios.delete(`http://localhost:3000/blogdelete/${_id}`)
            fetchData();
        } catch (err) {
            console.log({ "handleDelete btn for blog in frontend": err })
        }
    }
    const handlelike = async (userId, _id) => {
        console.log('hegy');
        try {
            const response = await axios.put('http://localhost:3000/likeblog', {
                userId: userId, _id: _id
            });
            fetchData();
            console.log({ "liked": response.data });

        } catch (err) {
            console.log('err in handlelike frontend side', err);
        }
    }

    const handleunlike = async (userId, _id) => {
        try {
            const response = await axios.put('http://localhost:3000/unlikeblog', {
                userId: userId, _id: _id
            });
            //console.log({"unliked":response.data});
            fetchData();
        } catch (err) {
            console.log('err in handleunlike frontend side', err);
        }
    }
    return (
        <div className="flex h-screen overflow-hidden bg-[#181A2E]">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className="flex flex-start"><AddBoxIcon style={{ color: 'rgb(40, 202, 67)' , cursor: 'pointer' }} onClick={() => setForm(!form)} /></div>
                    {form === true ? (
                        <div className="blog flex gap-5 items-center justify-center shadow-md p-20">
                            <form onSubmit={handleSubmit} className="blogform flex flex-col gap-5">
                                <textarea
                                    className="forminput text-black w-96"
                                    type="text"
                                    name="title"
                                    placeholder="Enter title"
                                    value={formField.title}
                                    onChange={handleChange}
                                    style={{ color: 'black' }} // Set text color to white using inline style
                                />
                                <textarea
                                    className="forminput text-black w-96"
                                    type="text"
                                    name="description"
                                    placeholder="Enter description"
                                    value={formField.description}
                                    onChange={handleChange}
                                    style={{ color: 'black' }} // Set text color to white using inline style
                                />
                                <input id='fileInput'
                                    className=""
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={handleChange}
                                    style={{ color: 'white' }} // Set text color to white using inline style
                                />
                                {formField.image === null ? (
                                    <img className="formfieldImage" src={uploadImage} alt="Upload Area" />
                                ) : (
                                    <></>
                                )}
                                <button className="btn bg-[#8C52FF] hover:bg-[#9461F8] text-black hover:text-white rounded-3xl border-white" type="submit">
                                    <span className="xs:block  text-xl">Submit</span>
                                </button>
                            </form>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div className="blogbox gap-30 flex flex-col mt-100 w-800 mx-auto">
                        {blog.map((data, index) => (
                            <div className="blogcard" key={index}>
                                <Card data={data} handlelike={handlelike} handleunlike={handleunlike} handleDelete={handleDelete} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>


    );
}

export default Blogs;