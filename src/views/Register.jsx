import { useState } from "react"
import { NavLink } from "react-router-dom"
import { notify } from "../helpers/reactToastify"
import { baseUrl } from "../store/actions/actionCreator"

function Register() {
  const [input, setInput] = useState({})
  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await response.json()
      if (!response.ok) throw await data
      setInput({})
      notify(data.message)
    } catch (error) {
      error.message.forEach((element) => {
        notify(element)
      })
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img
            className="w-8 h-8 mr-2"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8553a5ff-ec10-48b0-ab92-3d7237628a0d/df0uizl-c66fedf3-3cce-4847-ab2b-1ed0956f7c70.png/v1/fill/w_632,h_605,strp/signature_of_whis_by_lagreyzuliana_df0uizl-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA1IiwicGF0aCI6IlwvZlwvODU1M2E1ZmYtZWMxMC00OGIwLWFiOTItM2Q3MjM3NjI4YTBkXC9kZjB1aXpsLWM2NmZlZGYzLTNjY2UtNDg0Ny1hYjJiLTFlZDA5NTZmN2M3MC5wbmciLCJ3aWR0aCI6Ijw9NjMyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7jjdigeVD8wr4wDUjLWFxx_uG77DccPbDTGUBWwaxQU"
            alt="logo"></img>
        </div>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create Account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Username
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={input.username || ""}
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Gravity Falls"
                  required=""></input>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your email
                </label>
                <input
                  onChange={handleChange}
                  value={input.email || ""}
                  type="email"
                  name="email"
                  id="email"
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
                  onChange={handleChange}
                  value={input.password || ""}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required=""></input>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Phone Number
                </label>
                <input
                  onChange={handleChange}
                  value={input.phoneNumber || ""}
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+12 346867"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required=""></input>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Address
                </label>
                <input
                  onChange={handleChange}
                  value={input.address || ""}
                  type="text"
                  name="address"
                  id="address"
                  placeholder="London 5208, United Kingdom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required=""></input>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Create an account
              </button>
              <p className="text-sm font-light ">
                Already have an account?{" "}
                <NavLink
                  to={"/login"}
                  className="font-medium text-blue-600 hover:underline ">
                  Login here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
