import { CATEGORY_BUILDER } from "../actions/actionTypes"

export function categoryReducer(state = [], action) {
  switch (action.type) {
    case CATEGORY_BUILDER:
      return (state = action.payload.data)
    default:
      return state
  }
}