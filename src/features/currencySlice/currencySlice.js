import { createSlice } from "@reduxjs/toolkit";
import { defaultCurrencies } from "../../assets/currencies";

const initialState = {
  baseCurrency: defaultCurrencies.find((item) => item.id === "inr"),
  currencies: [],
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      try {
        state.baseCurrency = action.payload;
      } catch (error) {
        return error;
      }
    },
    setCurrencies: (state, action) => {
      try {
        state.currencies = [];
        action.payload.forEach((item) => {
          let found = defaultCurrencies.find((c) => c.id === item);
          if (found) {
            state.currencies.push(found);
          } else {
            const newCurrency = {
              id: item,
              name: item.toUpperCase(),
              symbol: item.toUpperCase(),
            };
            state.currencies.push(newCurrency);
          }
        });
      } catch (error) {
        return error;
      }
    },
  },
});

export const { changeCurrency, setCurrencies } = currencySlice.actions;

export default currencySlice.reducer;
