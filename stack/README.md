# Stack

## How to build a simple stack 
Refactored from p50 of the textbook.
```
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
```
## When to use the stack class
p53 of the textbook
### Multiple Base Conversions
See multiple-base-conversions.js in this folder
### Palindromes
See test-palindromes.js

