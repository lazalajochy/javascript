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

+ Número (Number): Representa valores numéricos, ya sean enteros o de punto flotante.
```javascript
let edad = 25; // Entero
let precio = 99.99; // Punto flotante
```

+ Cadena de texto (String): Representa secuencias de caracteres, como palabras o frases.
```javascript
let nombre = "Ana";
let frase = "Hola, ¿cómo estás?";
```

+ Booleano (Boolean): Representa un valor verdadero (true) o falso (false).
```javascript
let esMayorDeEdad = true;
let esEstudiante = false;
```
+ Objeto (Object): Representa una colección de propiedades y valores, que pueden ser cualquier tipo de datos, incluyendo otros objetos.
```javascript
let persona = {
  nombre: "Carlos",
  edad: 30,
  esEstudiante: false
};
```
+ Nulo (Null): Representa la ausencia intencionada de un valor o una referencia a un objeto inexistente.
```javascript
let valorNulo = null;
```

+ Arreglo (Array): Representa una colección ordenada de elementos, que pueden ser de cualquier tipo de datos, incluyendo otros arreglos u objetos.

```javascript
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Juan", "María", "Luis"];
```

+ Indefinido (Undefined): Representa una variable que se ha declarado pero aún no se le ha asignado ningún valor.
```javascript
let variableIndefinida;
```
+ Símbolo (Symbol): Introducido en ES6, representa un valor único que se puede utilizar como clave en objetos para evitar colisiones de nombres de propiedades.
```javascript
const simbolo = Symbol("descripcion");
```

+ BigInt: Introducido en ES11, representa números enteros grandes que no pueden ser representados por el tipo de dato Number.
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
+ (Resta): Resta un valor de otro.
```javascript
  let resta = 10 - 4; // Resultado: 6
```

+ (Multiplicación): Multiplica dos valores.
```javascript
let multiplicacion = 2 * 3; // Resultado: 6
```
+ (División): Divide un valor entre otro.
```javascript
let division = 10 / 2; // Resultado: 5
```
+  (Módulo): Devuelve el resto de la división entre dos valores.
```javascript
let modulo = 10 % 3; // Resultado: 1 (resto de 10 dividido por 3)
```

# Operadores de Asignación:
Estos operadores se utilizan para asignar valores a variables.

+ (Asignación): Asigna el valor de la derecha a la variable de la izquierda.
```javascript
let x = 5; // Asigna 5 a la variable x
```
+ (Asignación de suma): Incrementa el valor de la variable con el valor a la derecha y luego asigna el resultado a la variable
```javascript
let y = 10;
y += 3; // Incrementa y en 3, y luego asigna: y = 13
```
+ Asignación de resta (-=): Disminuye el valor de la variable con el valor a la derecha y luego asigna el resultado a la variable.

```javascript
let z = 8;
z -= 2; // Disminuye z en 2, y luego asigna: z = 6
```
+ Asignación de multiplicación (*=): Multiplica el valor de la variable con el valor a la derecha y luego asigna el resultado a la variable.

```javascript
 let a = 4;
a *= 5; // Multiplica a por 5, y luego asigna: a = 20
```

+ Asignación de división (/=): Divide el valor de la variable con el valor a la derecha y luego asigna el resultado a la variable.

```javascript
let b = 16;
b /= 4; // Divide b por 4, y luego asigna: b = 4
```
+ Asignación de módulo (%=): Calcula el módulo del valor de la variable con el valor a la derecha y luego asigna el resultado a la variable.

```javascript
let c = 10;
c %= 3; // Calcula el módulo de c con 3, y luego asigna: c = 1
```
+ Asignación de exponenciación (**=): Eleva el valor de la variable a la potencia del valor a la derecha y luego asigna el resultado a la variable. (Este operador se introdujo en ECMAScript 2016).

```javascript
let d = 2;
d **= 3; // Eleva d a la potencia de 3, y luego asigna: d = 8
```

# Estructuras de control

+ La estructura if...else permite tomar decisiones basadas en una condición. Si la condición es verdadera, se ejecuta el bloque de código dentro de if, de lo contrario, se ejecuta el bloque de código dentro de else.

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

+ switch se utiliza para tomar decisiones múltiples en función del valor de una expresión. Se comparan casos con el valor de la expresión y se ejecuta el bloque de código correspondiente al caso coincidente.

```javascript
let dia = "Lunes";

switch (dia) {
  case "Lunes":
    console.log("Hoy es el primer día de la semana");
    break;
  case "Martes":
    console.log("Hoy es martes");
    break;
  default:
    console.log("Es otro día de la semana");
}
```
+ El bucle for se utiliza para ejecutar un bloque de código varias veces. Tiene tres partes: la inicialización, la condición de salida y la expresión de actualización, lo que permite un control preciso del número de iteraciones.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteración #" + i);
}
```
+ El bucle while se utiliza para ejecutar un bloque de código mientras una condición sea verdadera. Se verifica la condición antes de cada iteración.

```javascript
let contador = 0;

while (contador < 5) {
  console.log("Iteración #" + contador);
  contador++;
}
```

+ La estructura do...while se utiliza para ejecutar un bloque de código al menos una vez y luego repetirlo mientras una condición sea verdadera. A diferencia de while, la condición se verifica después de ejecutar el bloque de código, lo que garantiza que el bloque se ejecute al menos una vez, incluso si la condición inicialmente es falsa.

```javascript
let contador = 0;

do {
  console.log("Iteración #" + contador);
  contador++;
} while (contador < 5);
```

# Funciones básicas y declaración de funciones.

+ Las funciones básicas en JavaScript son fragmentos de código reutilizables que realizan tareas específicas. Puedes definir una función utilizando la palabra clave function.

```javascript
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludar("Juan"); // Llama a la función para saludar a Juan
```
En este ejemplo, hemos definido una función llamada saludar que toma un parámetro nombre y muestra un saludo personalizado en la consola.

+ Las declaraciones de funciones son otra forma de definir funciones en JavaScript, donde utilizamos la palabra clave function seguida de un nombre de función.

```javascript
function suma(a, b) {
  return a + b;
}

const resultado = suma(5, 3); // Llama a la función para sumar 5 y 3
console.log(resultado); // Muestra el resultado en la consola
```

En este ejemplo, hemos declarado una función llamada suma que toma dos parámetros, a y b, y devuelve la suma de esos dos valores. Luego, llamamos a la función suma con los argumentos 5 y 3 y almacenamos el resultado en la variable resultado.

Tanto las funciones básicas como las declaraciones de funciones son fundamentales en JavaScript para encapsular lógica, reutilizar código y modularizar programas. Las funciones declaradas con la palabra clave function se pueden utilizar antes de su definición debido al concepto de "hoisting" en JavaScript, mientras que las funciones básicas no tienen esa ventaja y deben declararse antes de su uso.

# Objetos y propiedades.

Un objeto en JavaScript es una colección de pares clave-valor, donde las claves son cadenas (o símbolos) que actúan como nombres para las propiedades y los valores pueden ser de cualquier tipo de datos, como números, cadenas, funciones u otros objetos. Los objetos se utilizan para modelar y organizar datos de manera estructurada.

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  },
};

console.log(persona.nombre); // Acceder a la propiedad nombre del objeto
persona.saludar(); // Llamar al método saludar del objeto
```

En este ejemplo, hemos creado un objeto llamado persona que tiene propiedades como nombre, edad y ciudad, así como un método saludar que muestra un saludo personalizado.

+ Las propiedades son los miembros de un objeto y representan datos relacionados con ese objeto. Pueden ser accesadas y modificadas utilizando la notación de punto (por ejemplo, objeto.propiedad) o la notación de corchetes (por ejemplo, objeto['propiedad']).

```javascript
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
};

console.log(coche.marca); // Acceder a la propiedad marca utilizando notación de punto
console.log(coche['año']); // Acceder a la propiedad año utilizando notación de corchetes

coche.color = "Azul"; // Agregar una nueva propiedad color al objeto
console.log(coche.color); // Acceder a la nueva propiedad color
```

# Scopes y ámbito de las variables (var, let, const).

Los scopes y el ámbito de las variables son conceptos importantes en JavaScript que determinan dónde y cuándo se puede acceder a una variable. JavaScript tiene tres tipos principales de ámbito de variables, asociados a var, let y const. Aquí tienes una explicación de cada uno:

+ Ámbito de variables con var:  Las variables declaradas con var tienen un ámbito de función o un ámbito global, dependiendo de si se declaran dentro de una función o fuera de ella

```javascript
function ejemploVar() {
  if (true) {
    var x = 10; // Ámbito de función
  }
  console.log(x); // Se puede acceder a x aquí
}

ejemploVar();
console.log(x); // También se puede acceder a x aquí (global)
```
+ Notas:

Las variables var declaradas dentro de bloques de código, como if o for, tienen un ámbito de función.

Las variables var declaradas fuera de cualquier función tienen un ámbito global.

+ Ámbito de variables con let:  Las variables declaradas con let tienen un ámbito de bloque, lo que significa que solo están disponibles dentro del bloque de código más cercano en el que se declaran.

```javascript
function ejemploLet() {
  if (true) {
    let y = 20; // Ámbito de bloque
  }
  console.log(y); // Esto arrojará un error porque y no está definida aquí
}

ejemploLet();
```

+ Notas:

Las variables let tienen un ámbito más restrictivo que las variables var, lo que evita problemas como la "hoisting" (elevación) que ocurre con var.

Las variables let son ideales cuando deseas limitar la visibilidad de una variable a un bloque específico.


+ Ámbito de variables con const: Las variables declaradas con const también tienen un ámbito de bloque, al igual que las variables let. Sin embargo, una vez que se les asigna un valor, ese valor no puede ser reasignado.

```javascript
function ejemploConst() {
  const z = 30; // Ámbito de bloque
  z = 40; // Esto arrojará un error porque no se puede reasignar una constante
}

ejemploConst();
```

+ Notas:

Las variables const son útiles cuando deseas que una variable tenga un valor constante y no cambie durante la ejecución del programa.

Debes asignar un valor a una variable const cuando la declaras, ya que no se pueden declarar y luego asignar en diferentes momento
