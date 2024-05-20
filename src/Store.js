import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice/currencySlice";
import timeFrameReducer from "./features/timeFrameSlice/timeFrameSlice";
import cryptoSelectionReducer from "./features/cryptoSelector/cryptoSelectorSlice";
import chartReducer from "./features/chartSlice/chartSlice";
import { coinGekoCoreAPI } from "./features/services/coinGekoCore";
import { cryptoNewsCoreAPI } from "./features/services/cryptoNewsCore";

export const store = configureStore({
  reducer: {
    [coinGekoCoreAPI.reducerPath]: coinGekoCoreAPI.reducer,
    [cryptoNewsCoreAPI.reducerPath]: cryptoNewsCoreAPI.reducer,
    currency: currencyReducer,
    timeFrame: timeFrameReducer,
    cryptoSelection: cryptoSelectionReducer,
    chart: chartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      coinGekoCoreAPI.middleware,
      cryptoNewsCoreAPI.middleware,
    ]),
});
