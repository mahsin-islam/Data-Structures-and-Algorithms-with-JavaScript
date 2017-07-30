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

//push test ground
let tomStack = new stack();
tomStack.push('Pink Floyd');
tomStack.push('The Kinks');
console.log('Top of the stack: ' + tomStack.top)
console.log('Stack dataStore:' + tomStack.dataStore)

//pop test ground
console.log("first pop: " + tomStack.pop() + ', top is: ' + tomStack.peek());
console.log('second pop: ' + tomStack.pop() + ', top is: ' + tomStack.peek());
console.log('Stack after two pops: ' + tomStack.dataStore)

//clear test ground
tomStack.clear();
console.log('Stack dataStore after clear:' + tomStack.dataStore)