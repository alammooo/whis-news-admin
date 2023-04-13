import { notify } from "../../helpers/reactToastify"
import { CATEGORY_BUILDER, NEWS_BUILDER, USER_BUILDER } from "./actionTypes"
// export const baseUrl = "http://localhost:3000"
// export const baseUrl = "https://whis-news-server.foxhub.space"
export const baseUrl = "https://whisnews.abdullah-alam.xyz"

export function setNews(payload) {
  return {
    type: NEWS_BUILDER,
    payload,
  }
}

export function setCategory(payload) {
  return {
    type: CATEGORY_BUILDER,
    payload,
  }
}

export function setUser(payload) {
  return {
    type: USER_BUILDER,
    payload,
  }
}

export function postNews(payload) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw response.statusText
      const data = await response.json()
      dispatch(setNews(data))
      notify(`Successfully add news with title : ${data.data.title}`)
      return data
    } catch (error) {
      notify(error)
    }
  }
}

export function fetchNews() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/posts`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })

      if (!response.ok) throw response.statusText
      const data = await response.json()
      dispatch(setNews(data))
    } catch (error) {
      notify(error)
    }
  }
}

export function fetchNewsBySlug(slug) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/posts/${slug}`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })

      if (!response.ok) throw response.statusText
      const data = await response.json()

      return data
    } catch (error) {
      notify(error)
    }
  }
}

export function updatePost({ slug, payload }) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/posts/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) {
        throw data
      }
      dispatch(fetchNews(data))
      notify(data.message)
      return data
    } catch (error) {
      notify(error)
    }
  }
}

export function deleteNews(id) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/posts/${id}`, {
        method: "DELETE",
        headers: { access_token: localStorage.getItem("access_token") },
      })

      if (!response.ok) {
        throw response.statusText
      }

      dispatch(fetchNews())
    } catch (error) {
      notify(error)
    }
  }
}

export function fetchCategory() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories`, {
        method: "GET",
        headers: { access_token: localStorage.getItem("access_token") },
      })

      if (!response.ok) {
        throw response.statusText
      }
      const data = await response.json()
      dispatch(setCategory(data))
    } catch (error) {
      notify(error)
    } finally {
    }
  }
}

export function fetchCategoryById(id) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })

      if (!response.ok) {
        throw response.statusText
      }
      const data = await response.json()
      dispatch(setCategory(data))
    } catch (error) {
      notify(error)
    }
  }
}

export function createCategory(payload) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      console.log(data)
      if (!response.ok) throw data
      dispatch(setCategory(data))
      notify(`Successfully create category : ${data.name}`)
    } catch (error) {
      notify(error)
    }
  }
}
export function updateCategory({ id, payload }) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) {
        throw data
      }

      dispatch(fetchCategory())
      return data
    } catch (error) {
      notify(error)
    }
  }
}

export function deleteCategory(id) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
        method: "DELETE",
        headers: { access_token: localStorage.getItem("access_token") },
      })

      if (!response.ok) throw response.json()
      const data = await response.json()
      notify(data.message)
      console.log(data)
      dispatch(fetchCategory())
    } catch (error) {
      notify(error)
    }
  }
}
