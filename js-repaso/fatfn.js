// funciones que se DECLARAN con la palabra reservada function
function Fn() {
    this.prop = 'propiedad'
}

Fn.prototype.lala = function FuncionDePrototipo() {}

const r = new Fn()

// console.log(r)

// fat arrow funtion

const fatFn = () => { // NO TIENEN CONTEXTO DE THIS!!
    return 'chanchito feliz'
}

const r1 = fatFn()

console.log(r1)

// return implicito
const fnR = () => 2

console.log(fnR())