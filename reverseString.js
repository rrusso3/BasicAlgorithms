function reverseString(str) {
  var array = [];
  array = str.split('');
  array.reverse();
  str = array;
  return str.join("");
}
