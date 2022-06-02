/* 
first call stack occur all operations excuted in single thread but when you call Asynchronous function it sent to browser API and browser API act as second thread amd every new Asynchronous added to queue and when called back it follow FIFO(first-in first-out) rule.
*/
setTimeout(() => {
  console.log(3);
}, 0);
setTimeout(() => {
  console.log(4);
  console.log(number); //here no error occur although you used number before declared beause in this line excuted in back stack while in call stacj which excuted first number is declared
}, 0);
console.log(1);
console.log(2);
// console.log(number); /*will give you error because used before declared */
let number = 5;
number += 5;
