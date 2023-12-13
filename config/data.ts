export const wheelsData = [
  {
    option: "x19",
    style: {
      backgroundColor: "green",
      textColor: "black",
    },
    optionSize: 19,
  },
  {
    option: "x12",
    style: {
      backgroundColor: "white",
    },
    optionSize: 12,
  },
  {
    option: "x7",
    style: {
      backgroundColor: "red",
    },
    optionSize: 7,
  },
  {
    option: "x4",
    style: {
      backgroundColor: "blue",
    },
    optionSize: 4,
  },
  {
    option: "x4",
    style: {
      backgroundColor: "yellow",
    },
    optionSize: 4,
  },
  {
    option: "x2",
    style: {
      backgroundColor: "green",
    },
    optionSize: 2,
  },
  {
    option: "x2",
    style: {
      backgroundColor: "red",
    },
    optionSize: 2,
  },
  {
    option: "x2",
    style: {
      backgroundColor: "brown",
    },
    optionSize: 2,
  },
  {
    option: "x1",
    style: {
      backgroundColor: "black",
      textColor: "white",
    },
    optionSize: 1,
  },
  {
    option: "x1",
    style: {
      backgroundColor: "white",
    },
    optionSize: 1,
  },
]

export const spinInfo = {
  outerBorderColor: "white",
  outerBorderWidth: 1,
  innerBorderColor: "#e2e2e2",
  innerBorderWidth: 50,
  radiusLineWidth: 0,
  // pointerProps={
  //   {
  //     src: "/images/arrow.png"
  //   }
  // }
  startingOptionIndex: 8,
  spinDuration: 1,
}

export const spinTotalTime = () => {
  const START_SPINNING_TIME = 2600
  const CONTINUE_SPINNING_TIME = 750
  const STOP_SPINNING_TIME = 8000
  const spinDuration = spinInfo.spinDuration
  const startSpinningTime = START_SPINNING_TIME * spinDuration
  const continueSpinningTime = CONTINUE_SPINNING_TIME * spinDuration
  const stopSpinningTime = STOP_SPINNING_TIME * spinDuration
  const totalSpinningTime =
    startSpinningTime + continueSpinningTime + stopSpinningTime

  return totalSpinningTime
}
