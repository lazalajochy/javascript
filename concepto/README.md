# Concepto base de JavaScript

JavaScript (JS) es un lenguaje de programación ampliamente utilizado en el desarrollo web y en entornos de programación del lado del cliente. Fue creado originalmente como un lenguaje de secuencias de comandos para hacer que las páginas web fueran interactivas en los navegadores web. A lo largo del tiempo, JavaScript ha evolucionado y se ha convertido en un lenguaje de programación completo, capaz de realizar una variedad de tareas en diferentes contextos.

# Características clave de JavaScript
+ Lenguaje interpretado: JavaScript es un lenguaje interpretado, lo que significa que el código se ejecuta directamente por el motor del navegador o del entorno en lugar de ser compilado en código de máquina antes de la ejecución.

+ Lado del cliente y del servidor: En el contexto del desarrollo web, JavaScript se ejecuta en el lado del cliente (navegador) para manipular elementos del DOM, interactuar con APIs web y crear experiencias interactivas. Además, también se puede utilizar en el lado del servidor a través de plataformas como Node.js.

+ Lenguaje de scripting: JavaScript es conocido como un lenguaje de scripting debido a su capacidad para escribir scripts que controlan la ejecución de acciones en una aplicación o página web.

+ Dinámico y débilmente tipado: JavaScript es dinámico, lo que significa que las variables pueden cambiar de tipo durante la ejecución del programa. También es débilmente tipado, lo que permite operaciones entre diferentes tipos de datos sin requerir conversiones explícitas.

+ Manipulación del DOM: JavaScript es ampliamente utilizado para manipular el Document Object Model (DOM) de una página web, lo que permite agregar, modificar o eliminar elementos y contenido en tiempo real.

+ Programación asíncrona: 
JavaScript permite la ejecución asíncrona mediante callbacks, promesas y la sintaxis async/await. Esto es fundamental para manejar operaciones lentas como solicitudes a servidores y garantizar que las aplicaciones web sigan siendo receptivas

# Variables
una variable es un contenedor que se utiliza para almacenar valores. Estos valores pueden ser de diferentes tipos, como números, cadenas de texto, objetos, arreglos, booleanos, entre otros.

Ejemplo

```javascript
// Declaración de variables y asignación de valores
let nombre = "María"; // Variable 'nombre' con una cadena de texto
let edad = 28; // Variable 'edad' con un número
let esEstudiante = true; // Variable 'esEstudiante' con un booleano
```

Tipos de Variables en JavaScript:

En JavaScript, hay tres formas principales de declarar variables:

+ var: Fue la forma tradicional de declarar variables en JavaScript. Sin embargo, tiene algunas características de alcance que pueden llevar a comportamientos inesperados y se recomienda evitar su uso en favor de "let" y "const".

+ let: Introducido en ES6 (ECMAScript 2015), "let" permite declarar variables con alcance de bloque. Esto significa que una variable declarada con "let" solo es accesible dentro del bloque en el que se declara.

+ const: También introducido en ES6, "const" se utiliza para declarar variables cuyo valor no cambiará después de su asignación inicial. Las variables "const" también tienen alcance de bloque.

Ejemplo de uso de let y const

```javascript
// Ejemplo de uso de let
let contador = 0;
contador = contador + 1;

// Ejemplo de uso de const
const pi = 3.14159;
// pi = 3.14; // Esto generaría un error, ya que pi es constante y no puede cambiarse

// Alcance de bloque
if (true) {
  let variableBloque = "Soy una variable de bloque";
  console.log(variableBloque); // Funciona aquí
}
// console.log(variableBloque); // Esto generaría un error, ya que variableBloque solo existe en el bloque anterior
```

# Tipo de datos
En JavaScript, hay varios tipos de datos que puedes utilizar para representar diferentes tipos de información. Aquí tienes una lista de los tipos de datos más comunes junto con ejemplos de cada uno:

Número (Number): Representa valores numéricos, ya sean enteros o de punto flotante.
```javascript
let edad = 25; // Entero
let precio = 99.99; // Punto flotante
```

Cadena de texto (String): Representa secuencias de caracteres, como palabras o frases.
```javascript
let nombre = "Ana";
let frase = "Hola, ¿cómo estás?";
```

Booleano (Boolean): Representa un valor verdadero (true) o falso (false).
```javascript
let esMayorDeEdad = true;
let esEstudiante = false;
```
Objeto (Object): Representa una colección de propiedades y valores, que pueden ser cualquier tipo de datos, incluyendo otros objetos.
```javascript
let persona = {
  nombre: "Carlos",
  edad: 30,
  esEstudiante: false
};
```
Nulo (Null): Representa la ausencia intencionada de un valor o una referencia a un objeto inexistente.
```javascript
let valorNulo = null;
```

Arreglo (Array): Representa una colección ordenada de elementos, que pueden ser de cualquier tipo de datos, incluyendo otros arreglos u objetos.

```javascript
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Juan", "María", "Luis"];
```

Indefinido (Undefined): Representa una variable que se ha declarado pero aún no se le ha asignado ningún valor.
```javascript
let variableIndefinida;
```
Símbolo (Symbol): Introducido en ES6, representa un valor único que se puede utilizar como clave en objetos para evitar colisiones de nombres de propiedades.
```javascript
const simbolo = Symbol("descripcion");
```

BigInt: Introducido en ES11, representa números enteros grandes que no pueden ser representados por el tipo de dato Number.
```javascript
const numeroGrande = 1234567890123456789012345678901234567890n;
```

# Datos Primitivos:

Los datos primitivos son valores simples que representan una única pieza de información. Estos valores se almacenan directamente en la variable, y cuando asignas una variable a otra, se copia el valor. Los datos primitivos son inmutables, lo que significa que no se pueden cambiar directamente; si se modifica un valor, se crea una nueva instancia.

Los tipos de datos primitivos en JavaScript son:

+ Número (Number)

+ Cadena de texto (String)

+ Booleano (Boolean)

+ Símbolo (Symbol)

+ Indefinido (Undefined)

+ Nulo (Null)

+ BigInt (Introducido en ES11)

Ejemplo de Datos Primitivos:

```javascript
let x = 5; // Número
let nombre = "Juan"; // Cadena de texto
let esActivo = true; // Booleano
let miSimbolo = Symbol("descripción"); // Símbolo
let valorIndefinido = undefined; // Indefinido
let valorNulo = null; // Nulo
let numeroGrande = 1234567890123456789012345678901234567890n; // BigInt
```

# Datos No Primitivos:

Los datos no primitivos, también conocidos como tipos de referencia, son más complejos y pueden contener múltiples valores y/o propiedades. En lugar de almacenar directamente el valor en la variable, los datos no primitivos almacenan una referencia o dirección en memoria donde se encuentra el valor real. Cuando asignas una variable a otra, ambas variables apuntan a la misma ubicación en memoria. Esto significa que si modificas una variable, también se modificará la otra, ya que ambas apuntan al mismo valor en memoria.

Los tipos de datos no primitivos en JavaScript son:

+ Objetos (Object)

+ Arreglos (Array)

+ Funciones

+ Fechas (Date)

+ Regulares (RegExp)

+ Todos los tipos de datos definidos por el usuario

Ejemplo de Datos No Primitivos:

```javascript
let persona1 = { nombre: "Ana", edad: 30 }; // Objeto
let persona2 = persona1; // persona2 apunta al mismo objeto en memoria que persona1
persona2.edad = 31;
console.log(persona1.edad); // Salida: 31, porque ambos apuntan al mismo objeto

let arreglo1 = [1, 2, 3]; // Arreglo
let arreglo2 = arreglo1; // arreglo2 apunta al mismo arreglo en memoria que arreglo1
arreglo2.push(4);
console.log(arreglo1); // Salida: [1, 2, 3, 4], porque ambos apuntan al mismo arreglo
```

# Operadores

Los operadores en JavaScript son símbolos o palabras reservadas que permiten realizar operaciones en variables y valores. Los operadores pueden ser aritméticos, de asignación, de comparación, lógicos y más

Operadores Aritméticos:

Estos operadores se utilizan para realizar cálculos matemáticos.

+ (Suma): Suma dos valores.
```javascript
let suma = 5 + 3; // Resultado: 8
```



