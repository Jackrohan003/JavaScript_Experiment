
function outerFunction () {
  const outer = `I see the outer variable!`

 function innerFunction() {
   debugger;
    console.log(outer)
  }

  return innerFunction;
}

let x = outerFunction();
// this is the innerfunction 
x(); // I see the outer variable using the inner function !

