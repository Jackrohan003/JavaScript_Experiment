let a, b, rest;
 [a, b] = [10, 20];
 console.log(a); // expected output: 10
 console.log(b);// expected output: 20
 [a, b, ...rest] = [10, 20, 30, 40, 50];
 console.log(rest); 

// function created with variable number of parameters 
function max(...numbers ) {
   let result = -Infinity;
  console.log(numbers);
   for (let number of numbers) 
   {
      if (number > result) 
        result = number;
     console.log(`result = ${result}`);
     console.log(`number = ${number}`);
     
   }
   return result;
 }

console.log(max(4, 1, 9));
// → 9


