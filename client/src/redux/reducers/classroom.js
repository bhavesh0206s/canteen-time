import {
  T_CLASSLIST,
  S_CLASSLIST,
  ADDANNOUNCEMENT,
  ADDFILELINK,
  CREATECLASSROOM,
  JOINCLASSROOM,
} from "../actions/types";

const initialState = {
  myclassrooms: [],
  changedclassroom: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case T_CLASSLIST:
    case S_CLASSLIST:
    case CREATECLASSROOM:
      return {
        ...state,
        myclassrooms: payload,
      };
    case ADDFILELINK:
    case ADDANNOUNCEMENT:
      return {
        ...state,
        changedclassroom: payload,
      };
    case JOINCLASSROOM:
      return {
        ...state,
        myclassrooms: [payload, ...state.myclassrooms],
      };
    // case LOGOUT:
    //   localStorage.removeItem("token");
    //   return {
    //     ...state,
    //     token: null,
    //     isAuthenticated: false,
    //     loading: false,
    //     user: null,
    //   };
    // case ACCOUNT_DELETED:
    //   return {
    //     ...state,
    //     token: null,
    //     isAuthenticated: false,
    //     loading: false,
    //     user: null,
    //   };
    default:
      return state;
  }
};
