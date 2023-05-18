class Sumador{
   
    sumar(numeros, estrategia){
        let result = 0;
        for(let num of numeros){
            result += estrategia.operar(num)
        }
        return result

    }
}

class SumaSimple{
    operar(numeros){
        return numeros;

    }
}

class SumDouble{
    operar(numeros){
        return numeros * 2;
    }
}

const sum = new Sumador();
const numeros = [1,2,3,4,5]

const simple = new SumaSimple()
console.log(sum.sumar(numeros, simple));


const double = new SumDouble();
console.log(sum.sumar(numeros, double))

/*
En este ejemplo, tenemos la clase Sumador que se encarga de sumar una lista de números. Sin embargo, la forma en que se realiza la suma puede variar
dependiendo de la estrategia utilizada. Hemos definido dos estrategias diferentes: SumaSimple que suma los números tal como son, y SumaDoble que 
multiplica cada número por 2 antes de sumarlo.

Al implementar el Principio de Abierto/Cerrado, la clase Sumador está abierta para su extensión, ya que se pueden agregar nuevas estrategias de suma sin
modificar el código existente. Solo necesitamos crear una nueva clase que implemente la interfaz operar y pasarla como argumento al método sumar del Sumador.
Esto nos permite agregar fácilmente nuevas estrategias de suma sin alterar el funcionamiento del código existente.

De esta manera, podemos mantener el código más flexible y escalable, sin tener que modificar directamente la clase Sumador cada vez que necesitemos agregar 
una nueva estrategia de suma.





*/