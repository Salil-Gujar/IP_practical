function* generatorfunc(){
    let x=yield"greetings";
    console.log(x);
    yield 1;
    yield 2;
}
const gen=generatorfunc()
console.log(gen.next());
console.log(gen.next(21));
console.log(gen.next());
console.log(gen.next());


const arr=['a','b','c','d'];

function* generatorfunc2(){
    yield 10;
    yield* arr;
    yield 20;
}
const gen2=generatorfunc2()
for(let value of gen2){
    console.log(value);
}