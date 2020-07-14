import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.marviq.com/assessment/",
});
export default instance;
