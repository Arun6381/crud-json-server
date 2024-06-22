import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" flex justify-around ">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">Lists</Link>
          </li>
          {/* <li>
          <Link to="/edit/:id">Update</Link>
        </li> */}
        </ul>
      </nav>
    </div>
  );
}
