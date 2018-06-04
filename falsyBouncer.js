function bouncer(arr){
  var noFalsyArr = [];
  for(var i = 0; i < arr.length; i++){
    if(Boolean(arr[i])){
      noFalsyArr.push(arr[i]);
    }
  }
  return noFalsyArr;
}
