import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditTodo = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setName(data.name);
      setMobile(data.mobile);
      setEmail(data.email);
      // setuseData(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    const resp = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
      }),
    });

    const resp1 = await resp.json();

    if (resp1.status === 422) {
      alert("error");
    } else {
      navigate("/gettodo");
      alert("update succesfully");
    }
  };
  return (
    <div>
      <form action="" onSubmit={updateUser}>
        <h1>data</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditTodo;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// const EditTodo = () => {
//   const [userdata, setuseData] = useState([]);
//   // const [name, setName] = useState("");
//   // const [mobile, setMobile] = useState("");
//   // const [email, setEmail] = useState("");

//   const { id } = useParams("");
//   console.log(id);

//   const getdata = async () => {
//     const res = await fetch(`/getuser/${id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await res.json();
//     console.log(data);

//     if (res.status === 422 || !data) {
//       console.log("error ");
//     } else {
//       setuseData(data);
//       console.log("get data");
//     }
//   };

//   useEffect(() => {
//     getdata();
//   });

//   return (
//     <>
//       {userdata.map((item) => {
//         return (
//           <form>
//             <div key={item._id} className="mb-6">
//               <label
//                 for="name"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Name
//               </label>
//               <input
//                 value={item.name}
//                 // onChange={(e) => setName(e.target.value)}
//                 type="text"
//                 id="name"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="name@flowbite.com"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 for="mobile"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Mobile
//               </label>
//               <input
//                 value={item.mobile}
//                 // onChange={(e) => setMobile(e.target.value)}
//                 type="number"
//                 id="mobile"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 for="email"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Email
//               </label>
//               <input
//                 value={item.email}
//                 // onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 id="email"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 required
//               />
//             </div>
//             <button
//               // onClick={Submit}
//               type="submit"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Submit
//             </button>
//           </form>
//         );
//         })}
//     </>
//   );
// };

// export default EditTodo;
