import {
  STORE_ERR_MESSAGE,
  PROVE_ERR_MESSAGE,
  DOWNLOAD_ERR_MESSAGE
} from "../Actions/types";

const state = {
  StoreErrorMsg: "",
  ProveErrorMsg: "",
  DownloadErrorMsg: ""
};

function ProveitErrorReducer(mState = { ...state }, action) {
  switch (action.type) {
    case STORE_ERR_MESSAGE:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.StoreErrorMsg = action.payload;
      }
      return deepCopy(mState);

    case PROVE_ERR_MESSAGE:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.ProveErrorMsg = action.payload;
      }
      return deepCopy(mState);

    case DOWNLOAD_ERR_MESSAGE:
      if (action.payload === undefined || action.payload === null) {
      } else {
        mState.DownloadErrorMsg = action.payload;
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
export default ProveitErrorReducer;
