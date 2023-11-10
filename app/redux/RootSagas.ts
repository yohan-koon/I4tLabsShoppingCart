import { all, fork } from "redux-saga/effects";
import { watchGetUserByIdSaga, watchLoadExistingUserSaga, watchSignInSaga, watchSignOutSaga } from "./auth";
import { watchGetAllProductsSaga, watchGetProductByIdSaga, watchResetGetProductsSaga } from "./products";
import { watchAddToCartSaga, watchCheckoutSaga, watchGetCartItemSaga, watchGetCartItemsSaga, watchRemoveFromCartSaga } from "./cart";

const rootSaga = function* () {

  yield all([
    //User sagas
    fork(watchSignInSaga),
    fork(watchLoadExistingUserSaga),
    fork(watchSignOutSaga),
    fork(watchGetUserByIdSaga),
    //Product sagas
    fork(watchGetAllProductsSaga),
    fork(watchResetGetProductsSaga),
    fork(watchGetProductByIdSaga),
    //Cart sagas
    fork(watchAddToCartSaga),
    fork(watchGetCartItemSaga),
    fork(watchGetCartItemsSaga),
    fork(watchRemoveFromCartSaga),
    fork(watchCheckoutSaga)
  ]);
  
};

export default rootSaga;