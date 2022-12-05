const setStatsModifier = (stat: number): string => {
  if (stat <= 1) {
    return "-5";
  } else if (stat <= 3) {
    return "-4";
  } else if (stat <= 5) {
    return "-3";
  } else if (stat <= 7) {
    return "-2";
  } else if (stat <= 9) {
    return "-1";
  } else if (stat <= 11) {
    return "+0";
  } else if (stat <= 13) {
    return "+1";
  } else if (stat <= 15) {
    return "+2";
  } else if (stat <= 17) {
    return "+3";
  } else if (stat <= 19) {
    return "+4";
  } else {
    return "+5";
  }
};

export default setStatsModifier;
