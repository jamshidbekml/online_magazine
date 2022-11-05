const DateFormatter = (date, duration = 12) => {
  var newDate = Math.round(date / duration);
  var arr = [];

  var left = -3;
  var right = 0;
  for (var i = 0; Math.ceil(i < newDate.toString().length / 3); i++) {
    if (right !== 0) {
      arr.unshift(newDate.toString().slice(left, right));
    } else {
      arr.unshift(newDate.toString().slice(left));
    }
    left -= 3;
    right -= 3;
  }
  return arr.join(" ");
};

export default DateFormatter;
