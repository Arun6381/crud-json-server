import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://auth-jsonserver.onrender.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("There was an error fetching the users!", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://auth-jsonserver.onrender.com/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user!", error);
    }
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setEditMode(true);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://auth-jsonserver.onrender.com/users/${selectedUser.id}`,
        {
          name,
          email,
          password,
        }
      );
      fetchUsers();
      setEditMode(false);
      setSelectedUser(null);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("There was an error updating the user data!", error);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="divide-y divide-gray-300">
        {users.map((user) => (
          <li key={user.id} className="py-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.password}</p>
              </div>
              <div className="flex">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {editMode && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Update User</h2>
          <form onSubmit={updateUser} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 px-3 py-2 w-full"
                required
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        onClick={handleBack}
        className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default UserList;
