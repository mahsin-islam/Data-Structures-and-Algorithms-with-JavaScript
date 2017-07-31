class queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue(element){
    this.dataStore.push(element);
  }

  dequeue(){
    let priorityCode = this.dataStore[0].code;
    let nextPatient = [];
    let num = 0;
    for (let i = 0; i < this.dataStore.length; i ++){
      if (this.dataStore[i].code > priorityCode){
        num = i;
      }
    }
    return this.dataStore.splice(num, 1)
  }

  front(){
    return this.dataStore[0];
  }

  back(){
    return this.dataStore[this.dataStore.length - 1];
  }

  toString(){
    newString = '';
    this.dataStore.forEach ((element) => {
      newString += element + ' '
      })
    return newString;
  }

  ifEmpty(){
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

class patient {
  constructor(name, code){
    this.name = name;
    this.code = code;
  }
}

//test ground
var p = new patient('A', 3);
let list = new queue;
list.enqueue(p);
var p = new patient('B', 2);
list.enqueue(p);
var p = new patient('C', 5);
list.enqueue(p);

console.log('first patient: ' + list.dequeue()[0].name);
console.log('second patient: ' + list.dequeue()[0].name);
console.log('third patient: ' + list.dequeue()[0].name);



