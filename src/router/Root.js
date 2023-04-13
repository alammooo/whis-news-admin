import { createBrowserRouter, Navigate } from "react-router-dom"
import App from "../App"
import CategoryForm from "../components/CategoryForm"
import NewsForm from "../components/NewsForm"
import Category from "../views/Category"
import Login from "../views/Login"
import News from "../views/News"
import Register from "../views/Register"

function Protect({ children }) {
  const access_token = localStorage.getItem("access_token")
  if (!access_token) return <Navigate to="/login" replace />
  return children
}

function Authorized({ children }) {
  const access_token = localStorage.getItem("access_token")
  if (access_token) return <Navigate to="/news" replace />
  return children
}

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: (
      <Authorized>
        <Login />
      </Authorized>
    ),
  },
  {
    path: "/",
    element: (
      <Protect>
        <App />
      </Protect>
    ),
    children: [
     
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "category/add",
        element: <CategoryForm />,
      },
      {
        path: "category/:id",
        element: <CategoryForm />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/add",
        element: <NewsForm />,
      },
      {
        path: "news/:slug",
        element: <NewsForm />,
      },
    ],
  },
])

export default router
