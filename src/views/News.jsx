/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { NewsRows } from "../components/NewsRows"

import { fetchNews } from "../store/actions/actionCreator"

function News() {
  const { newsReducer } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  if (!newsReducer.length) {
    return (
      <section className="container flex flex-col h-screen mx-auto shadow-xl pt-5">
        <div className="flex justify-between py-5 px-5">
          <h1 className="font-medium text-3xl">News List</h1>
          <NavLink
            to={"/news/add"}
            className="py-2 px-6 rounded-sm text-xl bg-sky-700 text-amber-200 active:scale-95 duration-200">
            Add News
          </NavLink>
        </div>
        <h1 className="text-center text-2xl font-medium text-sky-900">News List is empty</h1>
      </section>
    )
  }
  return (
    <section className="container flex flex-col h-screen mx-auto shadow-xl pt-5">
      <div className="flex justify-between py-5">
        <h1 className="font-medium text-3xl px-3">News List</h1>
        <NavLink
          to={"/news/add"}
          className="py-2 px-6 rounded-sm text-xl bg-sky-700 text-amber-200 active:scale-95 duration-200">
          Add News
        </NavLink>
      </div>
      <div className="overflow-x-auto overflow-y-auto relative sm:rounded-lg">
        <table className="text-left w-screen text-gray-500 bg-white">
          <thead className="text-xs text-sky-900 uppercase">
            <tr className="border-y-2">
              <th scope="col" className="py-3 px-6">
                No.
              </th>
              <th scope="col" className="py-3 px-6 bg-sky-50">
                Title
              </th>
              <th scope="col" className="py-3 px-6 ">
                Description
              </th>
              <th scope="col" className="py-3 px-6 bg-sky-50 w-5">
                Author
              </th>
              <th scope="col" className="py-3 px-6 ">
                Image
              </th>
              <th scope="col" className="py-3 px-6 bg-sky-50">
                Category
              </th>
              <th scope="col" className="py-3 px-6 ">
                Created At
              </th>
              <th scope="col" className="py-3 px-6 bg-sky-50">
                Updated At
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {newsReducer.map((el, index) => (
              <NewsRows el={el} index={index} key={el.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default News
