import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { notify } from "../helpers/reactToastify"
import { baseUrl } from "../store/actions/actionCreator"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      if (!response.ok) throw data

      localStorage.setItem("access_token", data.access_token)

      navigate("/news")
      notify(`Login with email : ${email}`)
    } catch (error) {
      console.log(error)
      notify(error.message)
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img
            className="w-8 h-8 mr-2"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8553a5ff-ec10-48b0-ab92-3d7237628a0d/df0uizl-c66fedf3-3cce-4847-ab2b-1ed0956f7c70.png/v1/fill/w_632,h_605,strp/signature_of_whis_by_lagreyzuliana_df0uizl-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA1IiwicGF0aCI6IlwvZlwvODU1M2E1ZmYtZWMxMC00OGIwLWFiOTItM2Q3MjM3NjI4YTBkXC9kZjB1aXpsLWM2NmZlZGYzLTNjY2UtNDg0Ny1hYjJiLTFlZDA5NTZmN2M3MC5wbmciLCJ3aWR0aCI6Ijw9NjMyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7jjdigeVD8wr4wDUjLWFxx_uG77DccPbDTGUBWwaxQU"
            alt="logo"></img>
        </div>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login to Whis News
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required=""></input>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Sign in!
              </button>
              <p className="text-sm font-light ">
                Dont have Account?{" "}
                <NavLink
                  to={"/register"}
                  className="font-medium text-blue-600 hover:underline ">
                  Register Here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
