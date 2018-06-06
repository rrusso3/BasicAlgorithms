function mutation(arr) {
  var secondWordArr = arr[1].toLowerCase();
  var firstWordArr = arr[0].toLowerCase();
  for(var i = 0; i < secondWordArr.length; i++){
    if (firstWordArr.indexOf(secondWordArr[i]) === -1){
      return false;
    }
  }
  return true;
}
