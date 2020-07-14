import instance from "./index";

export const getData = (url) => {
  const dataResponse = instance.get(url);
  return dataResponse;
};
