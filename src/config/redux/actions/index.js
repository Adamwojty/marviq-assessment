import { fetchRequest, fetchSuccess, fetchFailure } from "./actionTypes";
import { getData } from "../../axios/connectors";

// FETCH MACHINES
export const fetchItems = async (dispatch) => {
  try {
    dispatch(fetchRequest());
    const dataResponse = await getData(
      "index.php?page=a&from=2018-01-07%2000:00:00"
    );
    await dispatch(fetchSuccess(dataResponse.data, "machines"));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};
// FETCH MACHINES STATUS
export const fetchStatus = async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const dataResponse = await getData(
      "index.php?page=b&from=2018-01-07%2000:00:00"
    );
    await dispatch(fetchSuccess(dataResponse.data, "status"));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};
// FETCH MACHINE OEE INFO
export const fetchOEE = async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const dataResponse = await getData(
      "index.php?page=c&from=2018-01-07%2000:00:00"
    );
    await dispatch(fetchSuccess(dataResponse.data, "OEE"));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};
