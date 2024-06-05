import {Link} from "react-router-dom"
import "./Navigation.css"
const Navigation = ()=>{
  return (
    <nav>
        <ul>
            <li>
              <Link to="/list">Home</Link>
            </li>
            <li>
              <Link to="/find-events">Find Events</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navigation;