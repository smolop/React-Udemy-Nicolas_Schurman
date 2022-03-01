const rest = (...argumentos) => {
    console.log(argumentos);
}

// rest(1, 2, 3)

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

// const { a, b, ...restobj } = obj 
// console.log(a, b, restobj);


const useState = () => ['valor', () => {}]

const [valor, setState] = useState()
console.log(valor, setState);