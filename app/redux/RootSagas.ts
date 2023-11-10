import { all, fork } from "redux-saga/effects";
import { watchLoadExistingUserSaga, watchSignInSaga, watchSignOutSaga } from "./auth";
import { watchGetAllProductsSaga, watchResetGetProductsSaga } from "./products";

const rootSaga = function* () {

  yield all([
    //User sagas
    fork(watchSignInSaga),
    fork(watchLoadExistingUserSaga),
    fork(watchSignOutSaga),
    //Product sagas
    fork(watchGetAllProductsSaga),
    fork(watchResetGetProductsSaga),
    //Cart sagas
  ]);
  
};

export default rootSaga;