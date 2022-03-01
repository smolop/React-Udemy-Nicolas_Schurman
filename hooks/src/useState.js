import { useState } from "react"

// reglas de los hooks
// no se llaman en loops, ni condiciones ni nada -> while, for, foreach, map, if
// siempre en el nivel más alto del componente
// Solo se llaman en 2 partes:
// 1. Componentes de react
// 2. Custom hooks
// "3". Cuando creemos un custom hook debe comenzar por use(Nombre) 

// class App extends Component {

//     state = { contador: 0}

//     incrementar = () => {
//         this.setState({contador: this.state.contador + 1})
//     }
//     render() {
//         return(
//             <div>
//                 contador: {this.state.contador}
//                 <button onClick={this.incrementar}>Incrementar</button>
//             </div>
//         )
//     }
// }

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }

    return [contador, incrementar]
} 

const App = () => {
    const [contador, incrementar] = useContador(0)
    return(
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App