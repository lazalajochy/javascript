# Principio de Abierto/Cerrado

El segundo principio SOLID es el "Principio de Abierto/Cerrado" (Open/Closed Principle, OCP). Este principio establece que una clase debe estar abierta para la extensión pero cerrada para la modificación. En otras palabras, debes poder agregar nuevas funcionalidades a un sistema sin tener que modificar el código existente.

Un diseño que sigue el OCP permite que las nuevas funcionalidades se añadan como extensiones o módulos sin afectar el código base. Esto es especialmente útil para mantener la estabilidad del sistema y reducir los riesgos asociados con la modificación de código ya probado.

# Ejemplo mal implementado (violación del OCP):
Supongamos que tienes un sistema de formas geométricas con un método para calcular el área de cada forma. Si decides agregar una nueva forma, digamos un triángulo, en una implementación que no sigue el OCP, podrías terminar modificando la clase existente para agregar esta funcionalidad.
```javascript
class Shape {
  // ...
}

class Circle extends Shape {
  // ...
  calculateArea() {
    // Cálculo del área del círculo
  }
}

class Square extends Shape {
  // ...
  calculateArea() {
    // Cálculo del área del cuadrado
  }
}

// Violación del OCP al agregar una nueva forma
class Triangle extends Shape {
  // ...
  calculateArea() {
    // Cálculo del área del triángulo
  }
}
```
En este caso, cuando se desea agregar una nueva forma, como el triángulo, es necesario modificar la clase Shape y todas las clases derivadas existentes. Esto viola el principio OCP, ya que se está alterando el código base en lugar de extenderlo.

# Ejemplo bien implementado (siguiendo el OCP):
En un diseño que sigue el OCP, se permiten extensiones sin modificar el código base. Esto se puede lograr mediante el uso de abstracciones y la implementación de patrones como el patrón "Strategy" o el uso de interfaces.


```javascript
class Shape {
  constructor(areaCalculator) {
    this.areaCalculator = areaCalculator;
  }

  calculateArea() {
    return this.areaCalculator.calculateArea();
  }
}

class CircleAreaCalculator {
  calculateArea() {
    // Cálculo del área del círculo
  }
}

class SquareAreaCalculator {
  calculateArea() {
    // Cálculo del área del cuadrado
  }
}

// Extensión sin modificar el código base
class TriangleAreaCalculator {
  calculateArea() {
    // Cálculo del área del triángulo
  }
}
```

En este ejemplo, las calculadoras de área son responsables de calcular el área de cada forma. Cada forma tiene una instancia de un calculador de área específico, y se puede agregar una nueva forma simplemente creando una nueva calculadora de área sin modificar el código base.

Siguiendo el OCP, puedes extender tu sistema sin cambiar las clases existentes, lo que facilita el mantenimiento y la evolución del software.
