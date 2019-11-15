import { PROVE, PROVE_ERR_MESSAGE } from "./types";
import { BaseURL } from "./BaseURL";
import axios from "axios";

export const getProveAction = (hash, crtl) => dispatch => {
  console.log(hash);
  axios
    .get(BaseURL + "/prove?hash=" + hash)
    .then(res => {
      dispatch({
        type: PROVE,
        payload: res.data
      });
      if (res.data) {
        crtl.setState({ loading: false });
      }
    })
    .catch(err => {
      dispatch({
        type: PROVE_ERR_MESSAGE,
        payload: err.response.data
      });
      console.log(err.response.data);
      if (err) {
        crtl.setState({ loading: false });
      }
    });
};
