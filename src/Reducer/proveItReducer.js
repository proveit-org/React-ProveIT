import { STORE, PROVE, DOWNLOAD } from "../Actions/types";

const state = {
  successMsg: "",
  proveSuccessMsg: "",
  downloadSuccessMsg: ""
};

function ProveitReducer(mState = { ...state }, action) {
  switch (action.type) {
    case STORE:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.successMsg = action.payload;
      }
      return deepCopy(mState);

    case PROVE:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.proveSuccessMsg = action.payload;
      }
      return deepCopy(mState);

    case DOWNLOAD:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.downloadSuccessMsg = action.payload;
      }
      return deepCopy(mState);

    default:
      return deepCopy(mState);
  }
}
const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default ProveitReducer;
