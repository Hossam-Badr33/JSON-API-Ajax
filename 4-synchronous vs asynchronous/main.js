/*1-synchronous => means operations are in chain if one-stop next operation stop.
2-Asynchronous => means operations are occur in parallel form more operation can work at same time */
//example of synchronous
/*
console.log(`1`);
console.log(`2`);
alert(`stop`);
console.log(`3`);
*/
//this operation will not occur until alert stop

//example of Asynchronous
console.log(`1`);
console.log(`2`);
setTimeout(() => console.log(`hossam`), 4000);
console.log(`3`);
