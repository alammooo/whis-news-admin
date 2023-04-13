import { useDispatch } from "react-redux"
import { localDate } from "../helpers/localDate"
import { deleteCategory } from "../store/actions/actionCreator"
import { NavLink } from "react-router-dom"
import { notify } from "../helpers/reactToastify"

export function CategoryRows({ el, index }) {
  const dispatch = useDispatch()

  const handleDelete = (id) => () => {
    dispatch(deleteCategory(id))
    notify(`Successfully delete News with id : ${id}`)
  }
  return (
    <tr className="border-b border-gray-200" key={index}>
      <td className="py-4 px-6">{index + 1}</td>
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-sky-50 dark:text-white ">
        {el.name}
      </th>
      <td className="py-4 px-6">{localDate(el.createdAt)}</td>
      <td className="py-4 px-6 bg-sky-50 ">{localDate(el.updatedAt)}</td>
      <td className="py-4 px-6 flex flex-col gap-2">
        <NavLink
          to={`/category/${el.id}`}
          className="font-medium text-amber-200 active:scale-95 duration-200 py-1 px-3 bg-blue-600 rounded-md">
          Edit
        </NavLink>
        <button
          onClick={handleDelete(el.id)}
          className="font-medium text-red-600 active:scale-95 duration-200 py-1 px-3 bg-amber-200 rounded-md">
          Delete
        </button>
      </td>
    </tr>
  )
}
