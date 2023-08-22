# Principio de Segregación de la Interfaz

El cuarto principio SOLID es el "Principio de Segregación de la Interfaz" (Interface Segregation Principle, ISP). Este principio establece que una clase no debe verse forzada a implementar interfaces que no utiliza. En otras palabras, las interfaces deben ser específicas para las necesidades de la clase y no deben contener métodos que la clase no necesita.

El ISP busca evitar interfaces "grasas" que contengan demasiados métodos, ya que esto puede llevar a una mayor complejidad y acoplamiento en el código.

# Ejemplo mal implementado (violación del ISP):

Supongamos que tienes una interfaz llamada Worker que contiene métodos para trabajar y comer:

```
interface Worker {
  work();
  eat();
}
```
Luego, tienes dos clases, OfficeWorker y FactoryWorker, que implementan la interfaz Worker. Sin embargo, la clase FactoryWorker no necesita el método eat, ya que los trabajadores de fábrica no tienen tiempo designado para comer.

```
class OfficeWorker implements Worker {
  work() {
    // Realizar trabajo de oficina
  }

  eat() {
    // Tomar un descanso para comer
  }
}

class FactoryWorker implements Worker {
  work() {
    // Realizar trabajo de fábrica
  }

  eat() {
    // Este método no es relevante para los trabajadores de fábrica
  }
}

```

En este caso, la clase FactoryWorker está forzada a implementar un método que no necesita. Esto viola el ISP, ya que la interfaz Worker no está diseñada específicamente para las necesidades de cada clase.


# Ejemplo bien implementado (siguiendo el ISP):

Para seguir el ISP, se pueden crear interfaces más específicas para cada clase y sus necesidades. En este ejemplo, creamos interfaces separadas para las acciones de trabajo y comer:

```
interface Workable {
  work();
}

interface Eatable {
  eat();
}

class OfficeWorker implements Workable, Eatable {
  work() {
    // Realizar trabajo de oficina
  }

  eat() {
    // Tomar un descanso para comer
  }
}

class FactoryWorker implements Workable {
  work() {
    // Realizar trabajo de fábrica
  }
}

```
De esta manera, las clases solo implementan las interfaces que son relevantes para sus necesidades, evitando la necesidad de implementar métodos innecesarios. Esto mejora la cohesión y reduce la complejidad del código.

