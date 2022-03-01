const fn = (a, b, c) => console.log(a + b + c)

const arr = [1, 2, 3]

fn(...arr)


const obj1 = { a: 1, b: 2 }
const obj2 = { b: 5, c: 'Chanchito feliz' }

const obj3 = {...obj1}
// console.log(obj3);

const obj4 = { ...obj1, ...obj2 }
console.log(obj4);

