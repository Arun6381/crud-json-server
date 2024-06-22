import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import AddUser from "./AddUser";
// import UpdateUser from "./UpdateUser";

import Login from "./Login";

const App = () => {
  return (
    <Router>
      <div>
        {/* Include Header here to render it on all routes */}
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/list" element={<UserList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
