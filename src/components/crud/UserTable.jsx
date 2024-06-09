import axios from 'axios';
import React from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserTable = ({ userData, setUserData }) => {
  // handle delete
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://66659d1fd122c2868e4135a8.mockapi.io/crud/${id}`
      );
      const newData = userData.filter((item) => {
        return item.id !== id;
      });
     setUserData(newData);
     toast.success('User Deleted Successfully')
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-[#AEAEAE]">
      <div className="overflow-x-auto whitespace-nowrap">
        <table className="w-full">
          <thead>
            <tr className="bg-tableBg text-[#333]">
              <th className="px-6 py-4 text-left">Username</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user) => (
              <tr key={user.id} className=" text-[#696969]">
                <td className="px-6 py-4 w-[20%]">{user.name}</td>
                <td className="px-6 py-4 w-[20%]">{user.email}</td>
                <td className=" px-6 py-4 space-x-2 text-center">
                  <div className="flex items-center gap-3">
                    <Link to={`/edit/${user.id}`}>
                      <button className="bg-blue text-white px-3 py-1 rounded flex items-center justify-center">
                        <MdOutlineEdit className="mr-1" /> Edit
                      </button>
                    </Link>
                    <Link to={`/detail/${user.id}`}>
                      <button className="bg-primary text-white px-3 py-1 rounded flex items-center justify-center">
                        <AiOutlineCheckCircle className="mr-1" /> Detail
                      </button>
                    </Link>
                    <button
                      className="bg-red text-white px-3 py-1 rounded flex items-center justify-center"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaTrash className="mr-1" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable