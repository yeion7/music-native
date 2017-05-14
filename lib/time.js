export const leftPad = function(number) {
  const pad = "00";
  return pad.substr(0, pad.length - number.length) + number;
};
export const formattedTime = function(milliseconds) {
  const totalSeconds = parseInt(milliseconds / 1000, 10);
  const minutes = parseInt(totalSeconds / 60, 10);
  const seconds = parseInt(totalSeconds % 60, 10);
  return `${minutes}:${leftPad(seconds.toString())}`;
};

const debounce = (func, wait, immediate) => {
  let timeout;
  return () => {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export default debounce;
