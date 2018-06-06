function frankenSplice(arr1, arr2, n) {
  var segA = arr2.slice(0, n);
  var segB = arr2.slice(n);    //only works for arrays of primitives
  var segM = arr1;

  console.log(segB);

  return segA.concat(segM, segB);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
