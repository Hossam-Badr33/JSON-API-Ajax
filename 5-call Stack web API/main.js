/*
- LIFO => last-in is first-out
- call stack detect web API and leave it to browser to handle it see:
setTimeOut() method API will excuted after all lines of code excuted because it left for brower 
 */
function one() {
  console.log(1);
}
function two() {
  //   one();
  console.log(2);
}
function three() {
  two();
  console.log(3);
}
//////////////////
setTimeout(() => {
  console.log("wen API");
}, 0);
console.log(1);
three();
one();
two();
console.log(3);
