import EventList from "../pages/EventList/EventList"
import FilterEvents from "../pages/FilterEvents/FilterEvents"
import EventDetail from "../pages/EventDetails/EventDetails"
import Login from "../pages/loginpage/login"
import Logout from "../pages/logout/logout"
import EventListAdmin from "../pages/adminAccess/EventList _admin"
import Create from "../utils/AccountCreation"
import EventAdd from "../pages/Modify/addEvents"
import AdminFilter from "../pages/FilterEvents/adminFilter"


export const routes = [
  {path:'/list',element:<EventList/>},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetail/>},
  {path:'/logout',element:<Logout/>},
  {path:'/',element:<Login/>},
  {path:'/admin',element:<EventListAdmin/>},
  {path:'/create',element:<Create/>},
  {path:'/addEvents',element:<EventAdd/>},
  {path:'/adminFilter',element:<AdminFilter/>}
]