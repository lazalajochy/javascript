function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid; // encontró el número, retorna el índice
      } else if (arr[mid] < target) {
        left = mid + 1; // si el número en el medio es menor, buscar en la mitad derecha
      } else {
        right = mid - 1; // si el número en el medio es mayor, buscar en la mitad izquierda
      }
    }
    
    return -1; // si no se encontró el número, retorna -1
  }
  
  // Ejemplo de uso
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 6;
  const index = binarySearch(arr, target);
  console.log(index); // debería imprimir 5 (el índice del número 6 en el arreglo)
  //En este ejemplo, la función binarySearch recibe un arreglo arr y un número target que se quiere buscar en el arreglo. La función utiliza un enfoque iterativo para encontrar el número, dividiendo repetidamente el arreglo en mitades hasta que el número objetivo se encuentra o se determina que no está en el arreglo.
  
  //Espero que te haya sido útil este ejemplo. ¡Buena suerte con tus proyectos en JavaScript!
  
  
  
  
  
  