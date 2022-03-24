export const chartStyles = {
  id: "basic-bar",
  fontFamily: "PT Sans",
  background: "#fff",
  toolbar: {
    show: false,
  },
};
export const legendStyles = {
  show: true,
  position: "top",
  horizontalAlign: "left",
  floating: false,
  fontWeight: 300,
  width: 300,
  height: 50,
  markers: {
    width: 14,
    height: 14,
    strokeWidth: 5,
    strokeColor: "#eee",
    radius: 5,
    offsetX: 0,
    offsetY: 0,
  },
}

export const gridStyles = {
  show: true,
  borderColor: "#eee",
  strokeDashArray: 0,
  position: "back",
  xaxis: {
    lines: {
      show: true,
    },
  },
  yaxis: {
    lines: {
      show: false,
    },
  },
}
export const markerStyles = {
  size: 5,
  strokeColors: "#fff",
  strokeWidth: 2,
  strokeOpacity: 0.9,
  fillOpacity: 1,
  shape: "circle",
  radius: 4,
  hover: {
    sizeOffset: 2,
  },
}