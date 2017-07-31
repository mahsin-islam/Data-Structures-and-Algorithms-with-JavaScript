class stack {
  constructor(){
    this.dataStore = [];
    this.top = 0;
  }
//to add element to our stack
  push(element){
    this.dataStore[this.top] = element;
    this.top ++
  }
//to pop element in the top position
  pop(){
    return this.dataStore[--this.top];
    //-- this.top vs this.top --
  }
//return top element of the stack
  peek(){
    return this.dataStore[this.top - 1];
  }
//show lenght of the stack
  length(){
    return this.top;
  }
//clear the stack
  clear(){
    this.dataStore = [];
    this.top = 0;
  }
}

function mulBase(num, base) {
  var s = new stack();
  do {
    s.push(num % base)
    num = Math.floor(num / base)
  } while (num > 0)
  let result = ''
  while (s.length() > 0){
    result += s.pop()
  }
  return result
}

//test ground
console.log(mulBase(32,2))