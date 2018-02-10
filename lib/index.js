module.exports = (win = window) => {
  
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack
  // for browser differences
  
  if (win.navigator && (win.navigator.doNotTrack === '1' || win.navigator.doNotTrack === 'yes')) {
    return false;
  } else if (win.navigator && win.navigator.msDoNotTrack === '1') {
    return false;
  } else if (win.doNotTrack === '1') {
    return false;
  }

  return true;
};
