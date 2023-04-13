/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {
  createCategory,
  fetchCategoryById,
  updateCategory,
} from "../store/actions/actionCreator"

function CategoryForm() {
  const [input, setInput] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(input, "INI DARI CATEGIORy")

  const { categoryReducer } = useSelector((state) => state)
  
  useEffect(() => {
    if (id) {
      dispatch(fetchCategoryById(id)).then(({ data }) => {
        setInput({ data })
      })
    }
  }, [])
  function handleSubmit(event) {
    event.preventDefault()
    if (id) {
      dispatch(updateCategory({ id, payload: input }))
      navigate("/category")
    } else {
      dispatch(createCategory(input))
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  return (
    <div className="container mx-auto h-screen py-5">
      <h1 className="text-center text-3xl">Update Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-gray-900">
            Category Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            value={input.name || ""}
            id="name"
            name="name"
            className="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Sport"
            required></input>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CategoryForm
