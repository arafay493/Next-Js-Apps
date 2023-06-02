import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../store/slices/userslice";
const update = () => {
  // Hooks Defination
  const [singleUser, setSingleUser] = useState({});
  
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.users);
  const router = useRouter();

  // Filter Specific Data from id whic was extracted above
  useEffect(() => {
    if (!router.isReady) return;
    const id = Number(router.query.update);
    // console.log(id);
    const data = selector.filter((elem) => elem.id === id)
    setSingleUser(data[0])
  }, [router.query.update , router.isReady]);

  const [updatedUser, setUpdatedUser] = useState({
    id: null,
    name: "",
    email: ""
  })
  useEffect(() => {
    setUpdatedUser(singleUser)
  }, [singleUser])


  const setUpdateUserDetails = (e) => {
    setUpdatedUser({
      ...singleUser,
      [e.target.name]: e.target.value
    })
  }
  // Destructuring name and Email from
  const {name , email} = updatedUser
  // console.log(updatedUser)


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editUser(updatedUser));
    router.push("/")
  };

  return (
    <>
      {singleUser && updatedUser && <div className="max-w-screen-md m-auto p-10">
        <h1 className="text-xl my-5">Update User</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="p-2"
            required
            onChange={setUpdateUserDetails}
            value={name}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="p-2"
            required
            onChange={setUpdateUserDetails}
            value={email}
          />
          <input
            type="submit"
            value="Update"
            className="bg-indigo-600 text-white px-3 py-2 rounded-md"
          />
        </form>
      </div>}
    </>
  );
};

export default update;
