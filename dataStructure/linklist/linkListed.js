/*
Insertar un nodo en el inicio
Insertar un nodo en una posición específica
Insertar un nodo al final
Eliminar un nodo en una posición específica
Recorrer la lista para imprimir sus elementos
Buscar un elemento en la lista
Contar el número de nodos en la lista
Revertir la lista.
 */

function ListOne() {
    this.head = null;
  }
  
  function NodeOne(value) {
    this.value = value;
    this.next = null;
  }
  
  ListOne.prototype.add = function (value) {
    if (this.head === null) this.head = new NodeOne(value);
    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new NodeOne(value);
    }
  };
  
  //Recorrer la lista para imprimir sus elementos
  ListOne.prototype.print = function () {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  };
  
  //Buscar un elemento en la lista
  ListOne.prototype.search = function (value) {
    let current = this.head;
    let result;
    console.log(value)
    while (current) {
      result = current.value;
      current = current.next;
      if(result === value)return true
      
    }
  return false
  
  };
  
  const listone = new ListOne();
  listone.add(2);
  listone.add(4);
  listone.add(25);
  
  console.log(listone);
  
  console.log(listone.search(2));
  