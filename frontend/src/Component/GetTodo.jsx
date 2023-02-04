import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const GetTodo = () => {
  const [userData, setuserData] = useState([]);
  console.log(userData);
  const getData = async () => {
    const data = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data1 = await data.json();

    if (data.status === 422 || !data1) {
      alert("error");
    } else {
      setuserData(data1);
      alert("succefully fetch data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (item) => {
    const remove = await fetch(`/deletuser/${item}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const removeData = await remove.json();

    if (remove.status === 402 || !removeData) {
      console.log("error");
    } else {
      getData();
      alert("delete data successfully");
    }
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {userData.map((item, i) => {
            return (
              <tbody key={item._id}>
                <tr key={item._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.mobile}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">
                    <NavLink
                      to={`/edittodo/${item._id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </NavLink>
                  </td>
                  <td className="px-6 py-4">
                    {/* <NavLink
                   href="#"
                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                 >
                   Delet
                 </NavLink> */}
                    <button onClick={() => deleteData(item._id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      {/* {
        userData.map((item,index)=>{
            return(
                <div key={index}>
              <h1>Id:{item._id}</h1>  
            <h1>Name:{item.name}</h1>
            <h1>Mobile:{item.mobile}</h1>
            <h1>Email:{item.email}</h1>
          </div>
            )
            
        })
    }
      */}
    </>
  );
};

export default GetTodo;
