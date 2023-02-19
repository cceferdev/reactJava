//esto no cambia el valor del string por que es unmutable pero puede alterar su composicion de minusculas a mayusculas con estas lineas
const nombre = 'Prueba'
const nombreWithUpperCase = nombre.toUpperCase()

console.log(nombreWithUpperCase)

//pero a traves de un array (que si es mutable) se pueden hacer cosas como estas
let lista = [12, 1]
// list.push('pedro') //el push solo empuja
const anotherList= lista.concat([45, 12]) //a concat le puedes pasar incluso otro array, pero a veces retorna en un anotherlist y es necesario definirlo asi
console.log(anotherList[2])

const info = {
    name: 'cesar',
    redesSociales: ['www.google.com','www.pornhub.com']
}

const field = 'redesSociales'

const result = (info[field])
console.log(result)