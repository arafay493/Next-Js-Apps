import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./store/slices/userslice";

const index = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col w-6xl mx-auto p-10">
      <h1 className="text-xl my-5">Crud App With Redux Toolkit</h1>
      <div className="text-white">
        <button className="bg-indigo-700 px-4 py-3 rounded-md gap-2">
          <Link href={"/create"} className="flex items-center">
            Add User{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </Link>
        </button>
      </div>
      <div className="overflow-x-auto max-w-5xl">
        <table className="table-fixed text-center mt-10 w-[56rem]">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-5 border-r">Name</th>
              <th className="p-5 border-r">Email</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((elem) => {
                const { id, name, email } = elem;
                return (
                  <tr key={id} className="even:bg-slate-100">
                    <td className="w-[200px] p-5 border-r">{name}</td>
                    <td className="p-5 border-r">{email}</td>
                    <td className="flex justify-evenly p-5">
                      <Link href={`/read/${id}`}>
                        <button className="bg-cyan-600 text-white px-3 py-2 rounded-md flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </button>
                      </Link>
                      <Link href={`/update/${id}`}>
                        <button className="bg-green-600 text-white px-3 py-2 rounded-md flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </button>
                      </Link>

                      <button className="bg-red-600 text-white px-3 py-2 rounded-md flex items-center gap-2" onClick={() => dispatch(deleteUser(id))}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
