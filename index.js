/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()
*/


Math.round = function(number) {
  n = number.toString().split('.');
  if (n.length > 1){
    if (parseInt(n[1].substring(0,1)) >= 5){
      return parseInt(n[0]) + 1;
    }
  }
  return parseInt(n);
};

Math.ceil = function(number) {
  n = number.toString().split('.');
  return n.length > 1 ? parseInt(n[0]) + 1 : parseInt(n);
};

Math.floor = function(number) {
  n = number.toString().split('.');
  return parseInt(n[0]);
};
