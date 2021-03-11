
function Person(name, age, gender)
{
  this.name= name; //p1.name
  this.age = age;
  this.gender= gender;
  this.greeting = function()
  {
   console.log(`hello there ${this.name}`);
    console.log(this);
  };

}
// cosole.log(this);
let p1 = new Person('Alia', 34, 'F');
//console.log(p1);
p1.greeting();
//  p2 = new Person('Mayank', 37, 'M');
// // console.log(p2);
//  p2.greeting();
