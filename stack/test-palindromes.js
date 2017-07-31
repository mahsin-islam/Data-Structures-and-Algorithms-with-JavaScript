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

function testPalindromes (string) {
  let s = new stack();
  for (let i = 0; i < string.length; i ++){
    s.push(string[i]);
  }
  let revString = '';
  s.dataStore.forEach ( (element) => {
    revString += s.pop();
    }
  );
  if (revString === string) {
    return true;
  } else {
    return false;
  }
}

//test ground
console.log(testPalindromes('racecar'))
console.log(testPalindromes('hello'))