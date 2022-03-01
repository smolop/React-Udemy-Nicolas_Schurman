// filter
const arr = [0, 1, 2, 3, 4]

const evens = arr.filter((e, idx) => e % 2 === 0)
//console.log(evens)

// map
//const mapped = arr.map( (e) => `<h1>${e}</h1>`)
//console.log(mapped)

const users = [
    { id: 1, name: 'Chanchito feliz' },
    { id: 2, name: 'Chanchiro triste' },
    { id: 3, name: 'Chanchito emocionado' },
    { id: 4, name: 'Chanchito Felipe' },
] 

// const mapped = users.map( (user) => `<h1>${user.name}</h1>`)
// console.log(mapped);

// reduce
const getMax = (a, b)=> Math.max(a, b)
//const r1 = arr.reduce( (acc, e) => acc + e, 0 )
//const r1 = arr.reduce(getMax)

// const r1 = users.reduce((acc, e) => `${acc === '' ? '' : `${acc}, `} ${e.name}`, '')
const r1 = users.reduce((acc, e) => {
    if (e.id < 2) {
        return acc
    }
    return acc.concat(e)
}, [])
console.log(r1)

