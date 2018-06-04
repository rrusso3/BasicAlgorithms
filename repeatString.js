function repeatStringNumTimes(str, num) {
  if (num >= 0){
    var newString = "";
    for(var i = 0; i < num; i++){
      newString += str;
    }
    return newString;
  } else if (num < 0){
    return "";
  }
}
