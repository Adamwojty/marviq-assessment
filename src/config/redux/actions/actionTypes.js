export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetchSuccess = (data, title) => {
  return {
    type: FETCH_SUCCESS,
    payload: {
      title,
      data,
    },
  };
};
export const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: {
      error,
    },
  };
};
