/*create an array of numbers and print the sum of all array elements*/
let cl =console.log;


let arr =[2, 6 , 9 , 0, 12, 89, 100];
console.log(arr);

for(i=0;i<arr.length;i++)
{
  console.log(arr[i]);
}

for(let i of arr)
  {
   cl(i); 
  }

// use for in for objects

let obj = {
  name: "John", 
    job: "stylist"
};

for(let e in obj){
  cl(obj[e]);
  
  
}
