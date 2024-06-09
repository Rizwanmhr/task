import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postUser, setPostUser] = useState({
    name: "",
    email: "",
  });

  // Fetch user
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://66659d1fd122c2868e4135a8.mockapi.io/crud/${id}`
      );
      setPostUser(res.data);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostUser({ ...postUser, [name]: value });
  };

  // Handle edit data
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://66659d1fd122c2868e4135a8.mockapi.io/crud/${id}`,
        postUser
      );
      navigate("/");
      toast.success("User Updated Successfully");
    } catch (error) {
      console.error("Failed to update user data", error);
    }
  };

  return (
    <div className="px-12 py-4">
       <div className="flex justify-center mt-10">
        <h1 className="text-center font-bold text-3xl inline text-white bg-primary border-[1px] border-success py-2 px-4 w-[400px] rounded-md">
        Edit User
        </h1>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-[48%]">
          <form onSubmit={handleEdit}>
            <div className="w-full mb-5">
              <input
                className="w-full h-[5rem] border-[3px] border-borderColor outline-none focus:border-[#01b688] py-1 pl-10 pr-2 rounded-2xl sm:h-[3rem]"
                type="text"
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
