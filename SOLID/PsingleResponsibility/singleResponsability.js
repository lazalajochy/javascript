class Sumador {
    sumar(numeros) {
      let resultado = 0;
      for (let numero of numeros) {
        resultado += numero;
      }
      return resultado;
    }
  }
  
  // Ejemplo de uso
  const sumador = new Sumador();
  const numeros = [1, 2, 3, 4, 5];
  const resultado = sumador.sumar(numeros);
  console.log(`La suma de los números es: ${resultado}`);



  /*
En este ejemplo, la clase Sumador tiene la única responsabilidad de realizar sumas de números. La función sumar toma un arreglo de números y devuelve la 
suma de ellos. No está involucrada en la obtención de los números, ni en la presentación del resultado.

Al aplicar el SRP, separamos la responsabilidad de realizar la suma en una clase dedicada a esa función específica. Esto permite un código más modular y
fácil de mantener, ya que si en el futuro necesitamos realizar cambios en la lógica de suma (por ejemplo, considerar solo los números pares o implementar 
una suma con condiciones adicionales), solo tendríamos que modificar la clase Sumador, sin afectar otras partes del sistema que no están directamente 
relacionadas con la suma de números.
  
  */