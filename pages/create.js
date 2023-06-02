import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/slices/userslice";
import { useRouter } from 'next/router';

const create = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  // const selector = useSelector((state) => state.users)
  // console.log(selector)


  const setUserDetails = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser(user))
    router.push("/");
  }
  return (
    <div className="max-w-screen-md m-auto p-10">
      <h1 className="text-xl my-5">Create User</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" className="p-2" required onChange={setUserDetails}/>
        <input type="email" name="email" placeholder="Enter Email" className="p-2" required onChange={setUserDetails}/>
        <input
          type="submit"
          value="Create"
          className="bg-indigo-600 text-white px-3 py-2 rounded-md"
        />
      </form>
    </div>
  );
};

export default create;
