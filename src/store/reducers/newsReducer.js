import { NEWS_BUILDER } from "../actions/actionTypes"

export function newsReducer(state = [], action) {
  switch (action.type) {
    case NEWS_BUILDER:
       return (state = action.payload.data)
    default:
      return state
  }
}