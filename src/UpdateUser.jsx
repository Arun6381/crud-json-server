// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateUser = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const fetchUser = async () => {
//     try {
//       const response = await fetch(`http://localhost:9000/users/${id}`);
//       if (response.ok) {
//         const user = await response.json();
//         setName(user.name);
//         setEmail(user.email);
//       } else {
//         alert("Error fetching user data!");
//         console.error("Error fetching user data:", response.statusText);
//       }
//     } catch (error) {
//       console.error("There was an error fetching the user data!", error);
//     }
//   };

//   const updateUser = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:9000/users/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email }),
//       });
//       if (response.ok) {
//         alert("User updated successfully!");
//         navigate("/");
//       } else {
//         alert("Error updating user!");
//         console.error("Error updating user:", response.statusText);
//       }
//     } catch (error) {
//       console.error("There was an error updating the user data!", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Update User</h2>
//       <form onSubmit={updateUser}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateUser;
