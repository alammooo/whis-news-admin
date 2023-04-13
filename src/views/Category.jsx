/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { CategoryRows } from "../components/CategoryRows"
import { deleteCategory, fetchCategory } from "../store/actions/actionCreator"

function Category() {
  const dispatch = useDispatch()
  const { categoryReducer } = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchCategory())
    dispatch(deleteCategory())
  }, [])

  return (
    <section className="container mx-auto shadow-xl w-screen mt-5 py-5 flex flex-col justify-center">
      <div className="flex items-center mx-auto gap-52 pb-5">
        <h1 className="font-medium text-3xl px-3 pb-2 text-center">
          Category List
        </h1>
        <NavLink to={"/category/add"} className="bg-sky-700 text-amber-300 py-2 px-4 rounded-md">Add Category</NavLink>
      </div>

      {categoryReducer.length ? (
        <div className="overflow-x-auto relative">
          <table className="text-left text-gray-500  mx-auto bg-white">
            <thead className="text-xs text-gray-700 uppercase ">
              <tr className="border-y-2">
                <th scope="col" className="py-3 px-6">
                  No.
                </th>
                <th scope="col" className="py-3 px-6 bg-sky-50 ">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Created At
                </th>
                <th scope="col" className="py-3 px-6 bg-sky-50 ">
                  Updated At
                </th>
                <th scope="col" className="py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryReducer.map((el, index) => (
                <CategoryRows el={el} index={index} key={el.id} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-center text-xl">Category not found</h1>
      )}
    </section>
  )
}

export default Category
