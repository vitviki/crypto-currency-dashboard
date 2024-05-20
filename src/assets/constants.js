export const timeGroup = [
  {
    name: "1D",
    value: 1,
    interval: "",
  },
  {
    name: "1W",
    value: 7,
    interval: "daily",
  },
  {
    name: "1M",
    value: 31,
    interval: "weekly",
  },
  {
    name: "6M",
    value: 180,
    interval: "",
  },
  {
    name: "1Y",
    value: 365,
  },
];

export const chart_type = [
  {
    id: "l_chart",
    name: "Line Chart",
  },
  {
    id: "b_chart_horizontal",
    name: "Bar Chart Horizontal",
  },
  {
    id: "b_chart_vertical",
    name: "Bar Chart Vertical",
  },
];

export function generateRandomColor() {
  const r = Math.random() * (255 - 0) + 0;
  const g = Math.random() * (255 - 0) + 0;
  const b = Math.random() * (255 - 0) + 0;

  const borderColor = `rgb(${r}, ${g}, ${b})`;
  const backgroundColor = `rgba(${r}, ${g}, ${b}, 0.8)`;

  return [borderColor, backgroundColor];
}
