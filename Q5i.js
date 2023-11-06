const arr=[1,2,3,4];
let itr=arr[Symbol.iterator]()
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

const arr2=['a','b','c','d'];
let itr2=arr2[Symbol.iterator]()
for( let value of itr2){
    console.log(value);
}

const arr3=[1,2,3]
for(let value of arr3){
    console.log(value);
}
