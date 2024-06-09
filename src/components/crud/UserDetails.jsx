import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
const [getUser, setGetUser] = useState()
const {id} = useParams()

//get single user
const getSingleUser = async() => {
const res = await axios.get(
  `https://66659d1fd122c2868e4135a8.mockapi.io/crud/${id}`
);
setGetUser(res.data)
}
useEffect(() => {
getSingleUser()
},[id])
console.log(getUser);
  return (
    <div className="px-12 py-4">
      <div className="flex justify-center mt-10">
        <h1 className="text-center font-bold text-3xl inline text-white bg-primary border-[1px] border-success py-2 px-4 w-[400px] rounded-md">
          Hello: {getUser?.name}
        </h1>
      </div>
      <div className="items-center py-4 px-4 shadow-lg mt-12 w-[50%] m-auto">
        <h1 className="text-2xl">
          My name is:{" "}
          <span className="font-bold text-primary">{getUser?.name}</span>
        </h1>
        <h1 className="pt-6 text-2xl">
          My email is:{" "}
          <span className="font-bold text-primary">{getUser?.email}</span>
        </h1>
      </div>
      <Link to="/">
        <div className="w-[50%] m-auto mt-12">
          <div className="text-white inline py-2 bg-primary border-[1px] border-success px-4 h-[50px] rounded-lg text-xl font-semibold">
            Back to Home
          </div>
        </div>
      </Link>
    </div>
  );
}

export default UserDetails