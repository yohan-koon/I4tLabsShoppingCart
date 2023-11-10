import { all, fork } from "redux-saga/effects";
import { watchLoadExistingUserSaga, watchSignInSaga, watchSignOutSaga } from "./auth";
import { watchGetAllProductsSaga, watchGetProductByIdSaga, watchResetGetProductsSaga } from "./products";
import { watchAddToCartSaga, watchGetCartItemSaga } from "./cart";

const rootSaga = function* () {

  yield all([
    //User sagas
    fork(watchSignInSaga),
    fork(watchLoadExistingUserSaga),
    fork(watchSignOutSaga),
    //Product sagas
    fork(watchGetAllProductsSaga),
    fork(watchResetGetProductsSaga),
    fork(watchGetProductByIdSaga),
    //Cart sagas
    fork(watchAddToCartSaga),
    fork(watchGetCartItemSaga)
  ]);
  
};

export default rootSaga;