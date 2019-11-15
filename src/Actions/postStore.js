import { STORE, STORE_ERR_MESSAGE } from "./types";
import { BaseURL } from "./BaseURL";
import axios from "axios";

export const postStoreAction = (
  file,
  hash,
  password,
  meta,
  crtl
) => dispatch => {
  const fd = new FormData();
  fd.append("file", file[0]);
  fd.append("hash", hash);
  fd.append("password", password);
  fd.append("meta", meta);
  axios
    .post(BaseURL + "/store", fd)
    .then(res => {
      dispatch({
        type: STORE,
        payload: res.data
      });
      console.log(res.data);
      if (res.data) {
        crtl.setState({ loading: false });
        crtl.setState({ contentStatus: false });
      }
    })
    .catch(err => {
      dispatch({
        type: STORE_ERR_MESSAGE,
        payload: err.response.data
      });
      console.log(err.response.data);
      if (err.response.data === "DUPLICATE_ENTRY") {
        crtl.setState({ loading: false });
      }
    });
};
