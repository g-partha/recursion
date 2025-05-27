// function fibs(num){
//     let fibsArray = [];
//     for(let i = 0; i < num; i++){
//         if(i < 2) fibsArray.push(i);
//         else fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
//     }
//     return fibsArray;
// }

// console.log(fibs(6));

function fibsRec(num) {
  if (num === 1) return [0];
  else if (num === 2) return [0, 1];
  else {
    let previousArray = fibsRec(num - 1);
    return [...previousArray, previousArray.at(-1) + previousArray.at(-2)];
  }
}
console.log(fibsRec(6));
