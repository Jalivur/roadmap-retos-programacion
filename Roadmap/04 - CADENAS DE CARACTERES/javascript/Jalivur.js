/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición, recorrido,
 *   conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

//Metodos En JavaScript con Cadenas:

//charAt, charCodeAt, codePointAt:
console.log("Metodos charAt, charCodeAt, codePointAt:")
console.log("==================")
let string1 = "Hola, JavaScript!!"
let indexValue = 5
console.log(`El Metodo charAt, devuelve el caracter en la posicion indicada como index,
cacena.charAt[${indexValue}], ${string1.charAt(indexValue)}.`)
console.log("==================")
console.log(`El Metodo charCodeAt, devuelve el codigo unicode del caracter en la posicion indicada como index,
cacena.charCodeAt[${indexValue}], ${string1.charCodeAt(indexValue)}.`)
console.log("==================")
console.log(`El Metodo codePointAt, devuelve el codigo unicode del caracter en la posicion indicada como index,
cacena.codeePointAt[${indexValue}], ${string1.codePointAt(indexValue)}.
A diferencia del metodo anterior, devuelve undefined si no encuentra caracter en el index indicado.`)
console.log("==================")

//indexOf, lastIndexOf:
console.log("Metodos indexOf, lastIndexOf: Ambos metodos devuelven -1 si la subcadena no se encuentra en la cadena")
console.log("==================")
let string2 = "Hola, JavaScript, Quel Tal, Mundo!!"
let searchValue = "ava"
let indexFrom = 1
console.log(`El Metodo indexOf, devuelve el valor de index de la subcadena indicada,
cacena.indexOF[${searchValue}], ${string2.indexOf(searchValue)}.`)
console.log("==================")
console.log(`El Metodo indexOf, devuelve el valor de index de la subcadena idicada, desde el index idicado,
cacena.indexOf[${searchValue},${indexFrom}], ${string2.indexOf(searchValue,indexFrom)}.`)
console.log("==================")
console.log(`El Metodo lastIndexOf, devuelve el ulitmo valor de index de la subcadena idicada,
cacena.lastIndexOf[${searchValue}], ${string2.lastIndexOf(searchValue)}.`)
console.log("==================")
console.log(`El Metodo lastIndexOf, devuelve el ultimo valor de index de la subcadena idicada, desde el index idicado,
cacena.lastIndexOf[${searchValue},${indexFrom}], ${string2.lastIndexOf(searchValue,indexFrom)}.`)
console.log("==================")

