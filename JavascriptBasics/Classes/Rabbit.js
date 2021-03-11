class Rabbit {
  constructor(type) 
  {
      this.type = type;
  }
   speak(line) 
  {
    console.log(`The ${this.type} rabbit says '${line}'`);  // " string", 'string', ` the ${this.type} is `
    console.log(this);
  }
}
const killerRabbit = new Rabbit("killer");// 
killerRabbit.speak('I kill'); // "The killer rabbit says 'I kill'"

const blackRabbit = new Rabbit("black");
blackRabbit.speak("I am black");// "The black rabbit says 'I am black'"


