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

let newArray = new Array(10);
newArray.generateRandom();
console.log(newArray)

let insertionSort = (array) => {
  let temp
  for (i= 1; i < array.dataStore.length; i ++){
    temp = array.dataStore[i]
    let j = i - 1
    while (temp < array.dataStore[j] && j >= 0){
      array.dataStore[j + 1] = array.dataStore[j]
      j--
    }
    array.dataStore[j + 1] = temp
  }
  return array
}

// insertionSort(newArray)
// console.log(newArray)
console.log(insertionSort(newArray).dataStore)

