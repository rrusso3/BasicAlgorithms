function frankenSplice(arr1, arr2, n) {
  var newArr1 = arr1.slice();
  var newArr2 = arr2.slice();

  for (var i=0; i<newArr1.length; i++){
    newArr2.splice(n, 0, newArr1[i]);
    n++
  }

  return newArr2;
}


frankenSplice([1, 2, 3], [4, 5, 6], 1);
