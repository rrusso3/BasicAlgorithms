function findLongestWordLength(str) {
  var splits = str.split(" ");
  var biggest = 0;
  for (var i=0; i<splits.length; i++){
    if(biggest <= splits[i].length){
      biggest = splits[i].length;
    }
  }
  return biggest;
}
