// Ancien JS
function first(){
  var greet = "Hi";
  function second(){
    alert(greet);
  }
  return second;
}

var newFunc = first();
newFunc();

// New JS
const first = () =>{
  const greet = "Hi";
  const second = () =>{
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();

// Currying
const multiply = (a, b) => a*b;
const curriedMultuply = (a) => (b) => a*b;
curriedMultuply(3);

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);
