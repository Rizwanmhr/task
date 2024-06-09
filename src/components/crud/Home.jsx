import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserTable from './UserTable';
import { toast } from "react-toastify";

const Home = () => {
const [userData, setUserData] = useState([])
const [postUser, setPostUser] = useState({
name:'',
email:''
})

// fetch user
const fetchData = async() => {
const res = await axios.get("https://66659d1fd122c2868e4135a8.mockapi.io/crud");
setUserData(res.data)
console.log(res.data)
}
useEffect(() => {
fetchData()
},[])

// handle change
let name
let value
const handleChange = (e) => {
name = e.target.name
value = e.target.value
setPostUser({...postUser,[name]: value})

}
// post user
const handleSubmit = async (e) => {
e.preventDefault()
try {
      const res = await axios.post(
        "https://66659d1fd122c2868e4135a8.mockapi.io/crud",
        postUser
      );
      fetchData()
      console.log(res, "this is user");
      console.log(postUser, 'this data');
      setPostUser({ name: "", email: "" });
      toast.success('User created Successfully!')
} catch (error) {
    console.log(error)
}
};

  return (
    <div className="px-12 py-4">
      <div className="flex justify-center">
        <h1 className="text-center font-bold text-3xl inline text-white bg-[#007F5F] border-[1px] border-[#57EBA1] py-2 px-4 w-[400px] rounded-md">
          User Crud
        </h1>
      </div>
      <div className="flex justify-between mt-12 gap-10">
        <div className="w-[48%]">
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-5">
              <input
                className="w-full h-[5rem] border-[3px] border-borderColor outline-none focus:border-[#01b688] py-1 pl-10 pr-2 rounded-2xl sm:h-[3rem]"
                type="name"
                placeholder="Name"
                name="name"
                value={postUser.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full h-[5rem] border-[3px] border-borderColor outline-none focus:border-primary py-1 pl-10 pr-2 rounded-2xl sm:h-[3rem]"
                type="email"
                placeholder="Email"
                name="email"
                value={postUser.email}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-primary border-[1px] border-success px-4 h-[50px] mt-5 rounded-lg text-xl font-semibold"
            >
              Create
            </button>
          </form>
        </div>
        <div className="w-[48%]">
          <UserTable userData={userData} setUserData={setUserData} />
        </div>
      </div>
    </div>
  );
}

export default Home