import React from "react";
import { useState } from "react";
import "../App.css";

const Todo = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const Submit = async (e) => {
    e.preventDefault();

    const resp = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        mobile,
        email,
      }),
    });

    const data = resp.json();

    if (resp.status === 422 || !data) {
      alert("error");
    } else {
      alert("successs");
    }
  };
  return (
    <>
      <form>
        <div className="mb-6">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
          value={name} onChange={(e)=>setName(e.target.value)}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="mobile"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Mobile
          </label>
          <input
          value={mobile} onChange={(e)=>setMobile(e.target.value)}
            type="number"
            id="mobile"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Email
          </label>
          <input
          value={email} onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
        onClick={Submit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      {/* <div className="App">
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='name'/>
      <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="number" placeholder='mobile'/>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email'/>
      <button onClick={Submit}>Submit</button>
    </div> */}
    </>
  );
};

export default Todo;
