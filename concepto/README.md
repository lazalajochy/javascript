# Concepto base de JavaScript

JavaScript (JS) es un lenguaje de programación ampliamente utilizado en el desarrollo web y en entornos de programación del lado del cliente. Fue creado originalmente como un lenguaje de secuencias de comandos para hacer que las páginas web fueran interactivas en los navegadores web. A lo largo del tiempo, JavaScript ha evolucionado y se ha convertido en un lenguaje de programación completo, capaz de realizar una variedad de tareas en diferentes contextos.

# Características clave de JavaScript
# Lenguaje interpretado
JavaScript es un lenguaje interpretado, lo que significa que el código se ejecuta directamente por el motor del navegador o del entorno en lugar de ser compilado en código de máquina antes de la ejecución.

# Lado del cliente y del servidor
En el contexto del desarrollo web, JavaScript se ejecuta en el lado del cliente (navegador) para manipular elementos del DOM, interactuar con APIs web y crear experiencias interactivas. Además, también se puede utilizar en el lado del servidor a través de plataformas como Node.js.

# Lenguaje de scripting
JavaScript es conocido como un lenguaje de scripting debido a su capacidad para escribir scripts que controlan la ejecución de acciones en una aplicación o página web.

# Dinámico y débilmente tipado
JavaScript es dinámico, lo que significa que las variables pueden cambiar de tipo durante la ejecución del programa. También es débilmente tipado, lo que permite operaciones entre diferentes tipos de datos sin requerir conversiones explícitas.

# Manipulación del DOM
JavaScript es ampliamente utilizado para manipular el Document Object Model (DOM) de una página web, lo que permite agregar, modificar o eliminar elementos y contenido en tiempo real.

# Programación asíncrona
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

var: Fue la forma tradicional de declarar variables en JavaScript. Sin embargo, tiene algunas características de alcance que pueden llevar a comportamientos inesperados y se recomienda evitar su uso en favor de "let" y "const".

let: Introducido en ES6 (ECMAScript 2015), "let" permite declarar variables con alcance de bloque. Esto significa que una variable declarada con "let" solo es accesible dentro del bloque en el que se declara.

const: También introducido en ES6, "const" se utiliza para declarar variables cuyo valor no cambiará después de su asignación inicial. Las variables "const" también tienen alcance de bloque.

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
