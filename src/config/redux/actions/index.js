import axios from "axios";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// FETCH MACHINES
export const fetchItems = async (dispatch) => {
  try {
    dispatch({ type: FETCH_REQUEST });
    const dataResponse = await axios.get(
      "https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00"
    );
    await dispatch({
      type: FETCH_SUCCESS,
      payload: {
        title: "machines",
        data: dataResponse.data,
      },
    });
  } catch (err) {
    dispatch({
      type: FETCH_FAILURE,
      payload: {
        error: err,
      },
    });
  }
};
// FETCH MACHINES STATUS
export const fetchStatus = async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  try {
    const dataResponse = await axios.get(
      "https://www.marviq.com/assessment/index.php?page=b&from=2018-01-07%2000:00:00"
    );
    await dispatch({
      type: FETCH_SUCCESS,
      payload: {
        title: "status",
        data: dataResponse.data,
      },
    });
  } catch (err) {
    dispatch({
      type: FETCH_FAILURE,
      payload: {
        error: err,
      },
    });
  }
};
// FETCH MACHINE OEE INFO
export const fetchOEE = async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  try {
    const dataResponse = await axios.get(
      "https://www.marviq.com/assessment/index.php?page=c&from=2018-01-07%2000:00:00"
    );
    await dispatch({
      type: FETCH_SUCCESS,
      payload: {
        title: "OEE",
        data: dataResponse.data,
      },
    });
  } catch (err) {}
};
