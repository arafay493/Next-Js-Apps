import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const read = () => {
  const router = useRouter();
  const [user, setUser] = useState();
  const selector = useSelector((state) => state.users);
  //   console.log(selector)

  //   Filter Perticular User Data and Display
  useEffect(() => {
    const id = Number(router.query.read);
    if (id) {
      const data = selector.filter((elem) => elem.id === id);
      setUser(data[0]);
    }
    // console.log(user)
  }, [router.query.read, router.isReady]);

  if (!router.query.read) {
    return <h1 className="mt-5 text-xl">Loading ............</h1>;
  }
  {
    return (
      // <div>read : {router.query.read}</div>
      user && (
        <div className="text-3xl flex flex-col gap-10 justify-center items-center">
          <div className="p-10  border-8 mt-5 flex flex-col gap-5">
            <h1>
              Name : <span className="text-indigo-600">{user.name}</span>
            </h1>
            <h1>
              Email : <span className="text-indigo-600">{user.email}</span>
            </h1>
          </div>
        </div>
      )
    );
  }
};

export default read;
