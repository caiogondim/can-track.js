module.exports = (win = window) => {
  if (win.navigator && win.navigator.doNotTrack === '1') {
    return false;
  } else if (win.navigator && win.navigator.msDoNotTrack === '1') {
    return false;
  } else if (win.doNotTrack === '1') {
    return false;
  }

  return true;
};
