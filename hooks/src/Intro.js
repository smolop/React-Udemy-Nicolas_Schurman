
const impura = () => new Date().toLocaleString()
console.log(impura())

// Una función pura nunca cambia su valor de retorno
const MiComponente = ({miProp}) => {
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return(
    <MiComponente miProp={'chanchito feliz'} />
  )
}

export default App
