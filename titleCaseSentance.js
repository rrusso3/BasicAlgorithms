function titleCase(str) {
  var convertToArrary = str.toLowerCase().split(' ');
  var result = convertToArrary.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}
