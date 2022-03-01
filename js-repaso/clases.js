// const Rectangulo = class R {

// }

class Rectangulo {
    
}

const r = new Rectangulo()

class Chancho {
    propiedad = 'mi propiedad'
    #hambre = false
    static estaico = 42
    constructor(estado = 'feliz', hambre = false){
        this.estado = estado
        this.#hambre = hambre 
    }

    hablar() {
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho'}`);
    }

    static comer() {
        console.log(this.estaico, 'estoy comiendo!');
    }
}

Chancho.comer()
const feliz = new Chancho('feliz')
console.log(feliz.__proto__);
// feliz.hablar()
const triste = new Chancho('triste')

const nose = new Chancho()