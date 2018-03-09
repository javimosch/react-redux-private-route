import faker from 'faker';
export const FETCH = 'counter/FETCH';
export const FETCH_SUCCESS = 'counter/FETCH_SUCCESS';

/*
- Keeps a list of shops
- Whitelist shop
- Blacklist shop
*/

const initialState = {
  list: [],
  isFetching: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        list: payload.list,
        isFetching: false
      };

    default:
      return state;
  }
};

export const fetch = () => {
  return dispatch => {
    dispatch({
      type: FETCH
    });

    setTimeout(() => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          list: makeData()
        }
      });
    }, 3000);

    return 'foo';
  };
};

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newShop = () => {
  return {
    name: faker.name.firstName()
  };
};

function makeData() {
  return range(100).map(d => {
    return {
      ...newShop()
    };
  });
}
