function truncateString(str, num) {
  if(str.length > num && num > 3){
    var strSliced = str.slice(0, num);
    return strSliced + '...';
  } else if (str.length <= num && num > 3){
    return str;
  } else if (num <= 3){
    var strSliced2 = str.slice(0, num);
    return strSliced2 + '...';
  }
}
