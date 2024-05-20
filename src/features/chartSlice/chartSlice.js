import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chartType: "l_chart",
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    changeChartType: (state, action) => {
      try {
        state.chartType = action.payload;
      } catch (error) {
        return error;
      }
    },
  },
});

export const { changeChartType } = chartSlice.actions;

export default chartSlice.reducer;
