import {
  GET_SUB_FORUM_LIST,
  SHOW_FORUM_POST,
  SHOW_SPECIFIC_POST,
  SHOW_TOPIC_WISE_FORUM_POST,
} from "../actions/types";

const initialState = {
  allPosts: [],
  specificPosts: [],
  specificPost: {},
  postComments: [],
  subForumList: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_FORUM_POST:
      return {...state, allPosts: payload};
    case SHOW_TOPIC_WISE_FORUM_POST:
      return {...state, specificPosts: payload};
    case SHOW_SPECIFIC_POST:
      return {...state, payload, specificPost: payload, postComments: payload.comments};
    case GET_SUB_FORUM_LIST:
      return {...state, subForumList: payload};
    default:
      return state;
  }
};
