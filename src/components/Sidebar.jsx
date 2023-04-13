import { useNavigate, NavLink } from "react-router-dom"
import { notify } from "../helpers/reactToastify"

function Sidebar() {
  const navigate = useNavigate()
  function handleLogout() {
    localStorage.clear()
    navigate("/login")
    notify("Successfully logged out")
  }
  return (
    <aside className="w-fit fixed" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 pr-10 bg-sky-900 rounded flex-col flex justify-center h-screen">
        <ul className="space-y-2">
          <li>
            <NavLink
              to={"/"}
              className="flex items-center p-2 text-base font-normal text-sky-50 rounded-lg hover:bg-sky-600 active:bg-sky-500">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-sky-50 transition duration-75 group-hover:text-sky-50"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/news"}
              className="flex items-center p-2 text-base font-normal text-sky-50 rounded-lg hover:bg-sky-600 active:bg-sky-500">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-sky-50 transition duration-75 group-hover:text-sky-50"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">News</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/category"}
              className="flex items-center p-2 text-base font-normal text-sky-50 rounded-lg hover:bg-sky-600">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-sky-50 transition duration-75 group-hover:text-sky-50"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Category</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center p-2 text-base font-normal text-sky-50 rounded-lg hover:bg-sky-600">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-sky-50 transition duration-75 group-hover:text-sky-50"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center p-2 text-base font-normal text-gray-50 rounded-lg hover:bg-red-500 shadow-sm bg-red-400">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
