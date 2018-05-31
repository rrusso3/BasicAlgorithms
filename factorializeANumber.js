function factorialize(num) {
  var chosenNum = num;
  if (chosenNum > 0){
    for(var i = 1; i < chosenNum; i++){
      num *= i;
    }
  } else if (chosenNum == 0){
    num = 1;
  }
  return num;
}
