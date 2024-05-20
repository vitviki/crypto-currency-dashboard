import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeFrame: 7,
};

const timeFrameSlice = createSlice({
  name: "timeFrame",
  initialState,
  reducers: {
    changeTimeFrame: (state, action) => {
      try {
        state.timeFrame = action.payload;
      } catch (err) {
        return err;
      }
    },
  },
});

export const { changeTimeFrame } = timeFrameSlice.actions;

export default timeFrameSlice.reducer;
