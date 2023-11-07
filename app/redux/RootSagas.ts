import { all, fork } from "redux-saga/effects";
import { watchSignInSaga } from "./auth";

const rootSaga = function* () {

  yield all([
    fork(watchSignInSaga),
    // Other forks
  ]);
  
};

export default rootSaga;