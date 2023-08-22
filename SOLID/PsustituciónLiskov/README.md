# Principio de Sustitución de Liskov

El tercer principio SOLID es el "Principio de Sustitución de Liskov" (Liskov Substitution Principle, LSP). Este principio establece que los objetos de una clase derivada deben poder ser sustituidos por objetos de la clase base sin afectar la correctitud del programa. En otras palabras, si tienes una clase base y una clase derivada, los objetos de la clase derivada deben poder usarse en lugar de los objetos de la clase base sin causar problemas.

En términos más simples, una subclase debe ser un reemplazo válido de su clase base y no debe cambiar el comportamiento esperado.

# Ejemplo mal implementado (violación del LSP):

Supongamos que tienes una jerarquía de clases para figuras geométricas y tienes un método para calcular el área. En este ejemplo, una clase derivada, Square, extiende la clase base Rectangle.

```
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(side) {
    this.width = side;
    this.height = side;
  }

  setHeight(side) {
    this.width = side;
    this.height = side;
  }
}

```
En este caso, la clase Square hereda de Rectangle, pero en la implementación de Square, los métodos setWidth y setHeight violan el comportamiento esperado. Estos métodos deberían ajustar el ancho y el alto de manera independiente en un Rectangle, pero en el caso de un Square, estos métodos rompen la relación entre ancho y alto que debería existir en un cuadrado.

# Ejemplo bien implementado (siguiendo el LSP):

Para cumplir con el LSP, las subclases deben ser intercambiables con la clase base sin cambiar el comportamiento esperado. En el ejemplo anterior, la relación entre Rectangle y Square es problemática porque un Square no es un reemplazo válido para un Rectangle.

Para corregir esto, podríamos replantear la jerarquía de clases o separar la funcionalidad de manera que no se rompa la relación de ancho y alto en el caso del cuadrado. Por ejemplo, podríamos eliminar la herencia y tener ambas clases como entidades independientes con sus propios comportamientos únicos.

El LSP es crucial para garantizar que las abstracciones y herencias sean coherentes y que las subclases no introduzcan comportamientos inesperados. Esto promueve la reusabilidad del código y la robustez del sistema.
