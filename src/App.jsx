import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <div className="flex gap-10 bg-gray-50">
        <Sidebar />
        <div className="w-full flex flex-col ml-36">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
