import {
  T_CLASSLIST,
  S_CLASSLIST,
  ADDANNOUNCEMENT,
  ADDFILELINK,
  CREATECLASSROOM,
  JOINCLASSROOM
} from './types'
import axios from 'axios'
// import { setAlert } from "./alert";
import setAuthToken from '../setAuthToken'

// Load User
export const loadTeacherClassRooms = () => async dispatch => {
  try {
    const res = await axios.get(
      'http://127.0.0.1:5000/api/classroom/teacher/getmyclassrooms'
    )
    console.log(res.data)
    dispatch({
      type: T_CLASSLIST,
      payload: res.data
    })
  } catch (err) {
    console.log('there is an error loadTeacherClassRooms')
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
}

export const loadStudentClassRooms = () => async dispatch => {
  try {
    const res = await axios.get(
      'http://127.0.0.1:5000/api/classroom/student/getmyclassrooms'
    )

    dispatch({
      type: S_CLASSLIST,
      payload: res.data
    })
  } catch (err) {
    console.log('there is an error loadStudentClassRooms')
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
}

// Regiseter user
export const createClassRooms = formdata => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(formdata)

  try {
    const res = await axios.post(
      'http://localhost:5000/api/classroom/createclassroom',
      body,
      config
    )

    dispatch({
      type: CREATECLASSROOM,
      payload: res.data
    })

    dispatch(loadTeacherClassRooms())
  } catch (err) {
    console.log(err)

    // dispatch({
    //   type: REGISTER_FAIL,
    // });
  }
}

export const uploadFileLinks = formdata => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(formdata)

  try {
    const res = await axios.post(
      `http://localhost:5000/api/classroom/uploadfile/${formdata.classRoomCode}`,
      body,
      config
    )

    dispatch({
      type: ADDFILELINK,
      payload: res.data
    })

    // dispatch(loadTeacherClassRooms());
  } catch (err) {
    console.log(err)
  }
}

export const addAnnouncement = formdata => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(formdata)

  try {
    const res = await axios.post(
      `http://localhost:5000/api/classroom/announcement/${formdata.classRoomCode}`,
      body,
      config
    )

    dispatch({
      type: ADDANNOUNCEMENT,
      payload: res.data
    })

    // dispatch(loadTeacherClassRooms());
  } catch (err) {
    console.log(err)
  }
}

export const joinClassRoom = formdata => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(formdata)

  try {
    const res = await axios.post(
      'http://localhost:5000/api/classroom/joinclassroom',
      body,
      config
    )

    dispatch({
      type: JOINCLASSROOM,
      payload: res.data
    })

    // dispatch(loadTeacherClassRooms());
  } catch (err) {
    console.log(err)
  }
}
