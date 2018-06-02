function largestOfFour(arr) {
  var results = [];
  for (var i=0; i<arr.length; i++){
    var biggest= arr[i][0];
    for (var j=1; j<arr[i].length; j++){
      if (arr[i][j]>biggest){
        biggest = arr[i][j];
      }
    }
    results[i] = biggest;
  }
  return results;
}
