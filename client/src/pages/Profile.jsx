import { useSelector } from "react-redux"
import { useRef,useState } from "react"

import { updateUserStart, updateUserSuccess, updateUserFailure } from "../redux/user/userSlice"
import { useDispatch } from "react-redux"

export default function Profile() {
  const fileRef = useRef(null)
  const { currentUser, error } = useSelector((state) => state.user)
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      } else {
        dispatch(updateUserFailure(data.message));       
      }
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="file" ref={fileRef} hidden accept="image/*" />
        <img onClick={()=>fileRef.current.click()} className="rounded-full self-center h-24 w-24 object-cover cursor-pointer" src={currentUser.avatar} alt="profile"/>
        <input type="text" onChange={handleChange} defaultValue={currentUser.username} placeholder="username" id="username" className="border p-3 rounded-lg" />
        <input type="text" onChange={handleChange} defaultValue={currentUser.email} placeholder="email" id="email" className="border p-3 rounded-lg" />
        <input type="text" onChange={handleChange} placeholder="password" id="password" className="border p-3 rounded-lg" />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
<p className="text-red-700 mt-5">{error ? error : ''}</p>
<p className="text-green-700 mt-5">{updateSuccess ? "User is updated successfully!" : ''}</p>
    </div>
  )
}
