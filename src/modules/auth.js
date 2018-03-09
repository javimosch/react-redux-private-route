import { login as loginHelper } from 'helpers/fakeServerApi';

export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';

const initialState = {
  user: null,
  authInProgress: false,
  isAuthenticated: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        authInProgress: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
        authInProgress: false
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export const login = () => {
  return dispatch => {
    dispatch({
      type: LOGIN
    });

    loginHelper().then(user => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: user
        }
      });
    });

    return 'foo';
  };
};

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: LOGOUT
    });
    return;
  };
};
