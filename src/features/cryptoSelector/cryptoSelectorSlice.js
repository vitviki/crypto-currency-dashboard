import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCoin: "bitcoin",
  coinPool: ["bitcoin"],
};

const cryptoSelection = createSlice({
  name: "cryptoSelection",
  initialState,
  reducers: {
    // Remove all the coins from state.currentCoins and just add the one passed in the payload. Also add it to the state.coinPool
    setCurrentCoin: (state, action) => {
      try {
        state.currentCoin = action.payload;
        const exists = state.coinPool.includes(action.payload);
        if (!exists) {
          state.coinPool.push(action.payload);
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export const { setCurrentCoin } = cryptoSelection.actions;

export default cryptoSelection.reducer;
