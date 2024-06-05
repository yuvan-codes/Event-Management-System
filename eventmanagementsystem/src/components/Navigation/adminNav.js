import {Link} from "react-router-dom"
import "./Navigation.css"
const AdminNav = ()=>{
  return (
    <nav>
        <ul>
            <li>
              <Link to="/admin">Home</Link>
            </li>
            <li>
              <Link to="/adminFilter">Find Events</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
        </ul>
    </nav>
  )
}
export default AdminNav;