import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { localDate } from "../helpers/localDate"
import { notify } from "../helpers/reactToastify"
import { deleteNews } from "../store/actions/actionCreator"

/* disini nerima props */
export function NewsRows({ el, index }) {
  const dispatch = useDispatch()
  const handleDelete = (id) => () => {
    dispatch(deleteNews(id))
    notify(`Succesfully delete News with id : ${id}`)
  }
  return (
    <>
      <tr className="border-b border-gray-200 dark:border-gray-700" key={el.id}>
        <td className="py-4 px-6">{index + 1}</td>
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 bg-sky-50 dark:text-white">
          {el.title}
        </th>
        <td className="py-4 px-6">{el.content}</td>
        <td className="py-4 px-6 bg-sky-50 w-5">{el.User.email}</td>
        <td className="p-1 ">
          <div className="w-24">
            <img src={el.imgUrl} className="w-full h-full" alt="" />
          </div>
        </td>
        <td className="py-4 px-6 bg-sky-50">{el.Category.name}</td>
        <td className="py-4 px-6">{localDate(el.createdAt)}</td>
        <td className="py-4 px-6 bg-sky-50">{localDate(el.updatedAt)}</td>
        <td className="py-4 px-6 flex flex-col gap-2">
          <NavLink to={`/news/${el.slug}`} className="font-medium text-amber-200 active:scale-95 duration-200 py-1 px-3 bg-blue-600 rounded-md">
            Edit
          </NavLink>

          <button
            onClick={handleDelete(el.id)}
            className="font-medium text-red-600 active:scale-95 duration-200 py-1 px-3 bg-amber-200 rounded-md">
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}
