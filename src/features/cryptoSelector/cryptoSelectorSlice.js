import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCoins: ["bitcoin"],
  coinPool: ["bitcoin"],
};

const cryptoSelection = createSlice({
  name: "cryptoSelection",
  initialState,
  reducers: {
    // Remove all the coins from state.currentCoins and just add the one passed in the payload. Also add it to the state.coinPool
    setCurrentCoin: (state, action) => {
      try {
        state.currentCoins = [];
        state.currentCoins.push(action.payload);
        const exists = state.coinPool.includes(action.payload);
        if (!exists) {
          state.coinPool.push(action.payload);
        }
      } catch (error) {
        return error;
      }
    },

    // Append the coin passed in the payload to the state.currentCoins.
    // If the add event is called and a coin already is in state.currentCoins, then remove it from the list.
    addToCurrentCoins: (state, action) => {
      try {
        const exists = state.currentCoins.includes(action.payload);
        if (!exists) {
          state.currentCoins.push(action.payload);
        } else {
          state.currentCoins = state.currentCoins.filter(
            (coin) => coin !== action.payload
          );
        }
      } catch (error) {
        return error;
      }
    },

    // Remove a coin from the store
    removeCoin: (state, action) => {
      state.currentCoins = state.currentCoins.filter(
        (coin) => coin !== action.payload
      );
      state.coinPool = state.coinPool.filter((coin) => coin !== action.payload);
    },
  },
});

export const { setCurrentCoin, addToCurrentCoins, removeCoin } =
  cryptoSelection.actions;

export default cryptoSelection.reducer;
