import axios from "axios";
import { loading }from "./loading";
import { SHOW_FORUM_POST, SHOW_TOPIC_WISE_FORUM_POST, SHOW_SPECIFIC_POST, GET_SUB_FORUM_LIST } from "./types";

export const addForumPost = (details, type) => async (dispatch) => {
  dispatch(loading(true));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(details);
  console.log(body, type)
  try {
    dispatch(loading(true));
    const res = await axios.post(`http://127.0.0.1:5000/api/forum/post/${type}`, body, config);

    dispatch(fetchAllForumPost());
    dispatch(loading(false));
  } catch (err) {
    console.log("error from add post: ", err);
    dispatch(loading(false));
  }
};

export const fetchAllForumPost = (type) => async (dispatch) => {
  try {
    const res = await axios.get('http://127.0.0.1:5000/api/forum/post');

    dispatch({
      type: SHOW_FORUM_POST,
      payload: res.data,
    });
  } catch (err) {
    console.log("error from add post: ", err);
  }
};

export const fetchTopicWiseForumPost = (type) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.get(`http://127.0.0.1:5000/api/forum/post/${type}`);
    console.log('from fetchTopicWiseForumPost: ', res.data)
    dispatch({
      type: SHOW_TOPIC_WISE_FORUM_POST,
      payload: res.data,
    });
    dispatch(loading(false));
  } catch (err) {
    console.log("error from add post: ", err);
    dispatch(loading(false));
  }
};

export const fetchSpecificPost = (type,id) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.get(`http://127.0.0.1:5000/api/forum/post/${type}/${id}`);
    console.log('from fetchTopicWiseForumPost: ', res.data)
    dispatch({
      type: SHOW_SPECIFIC_POST,
      payload: res.data,
    });
    dispatch(loading(false));
  } catch (err) {
    console.log("error from add post: ", err);
    dispatch(loading(false));
  }
};

export const AddReply = (type,reply, id) =>  async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({reply});
    dispatch(loading(true));
    console.log(body);
    const res = await axios.post(`http://127.0.0.1:5000/api/forum/post/comment/${id}`, body, config);
    dispatch(fetchSpecificPost(type,id))
    dispatch(loading(false));
  } catch (err) {
    console.log("error from add post: ", err);
    dispatch(loading(false));
  }
};

export const addSubForums = (topic) =>  async (dispatch) => {
  try {
    const res = await axios.post(`http://127.0.0.1:5000/api/forum/${topic}`);
    dispatch(fetchSubForums())
    dispatch(loading(false));
  } catch (err) {
    console.log("error from add post: ", err);
    dispatch(loading(false));
  }
};
export const fetchSubForums = () =>  async (dispatch) => {
  try {
    const res = await axios.get(`http://127.0.0.1:5000/api/forum/sub-forums`);
    console.log(res.data)

    dispatch({
      type: GET_SUB_FORUM_LIST,
      payload: res.data
    })

    dispatch(loading(false));
  } catch (err) {
    console.log("error from add post: ", err);
    dispatch(loading(false));
  }
};