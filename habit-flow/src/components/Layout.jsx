import { Outlet } from "react-router"
import Sidebar from "./Sidebar/Sidebar"

function  Layout () {
  return (
    <div className="habit-flow-container">
        <Sidebar /> 
        <Outlet />
    </div>
  )
}

export default Layout
