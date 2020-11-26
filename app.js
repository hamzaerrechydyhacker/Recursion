function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n); // make the num postivie then run the fun body
  else return isEven(n - 2); // keep decreasing the number if it is bigger than 1 
// by 2 and run the body of the fun 
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
