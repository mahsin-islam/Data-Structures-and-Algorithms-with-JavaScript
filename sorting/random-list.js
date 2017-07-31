class Array {
  constructor(numberElement){
    this.numberElement = numberElement;
    this.dataStore = [];
  }

  generateRandom(){
    for (let i = 0; i < this.numberElement; i++){
      this.dataStore.push(Math.floor(Math.random() * 100));
    }
  }
}

let newArray = new Array(100);
newArray.generateRandom();

console.log(newArray.dataStore);