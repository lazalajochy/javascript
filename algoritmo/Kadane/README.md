# El algoritmo de Kadane

 es un algoritmo eficiente para encontrar la subsecuencia continua con la suma máxima en un arreglo de números. El algoritmo utiliza la técnica de programación dinámica y consiste en recorrer el arreglo de izquierda a derecha, manteniendo un seguimiento de la suma acumulada de los elementos de la subsecuencia actual y la suma máxima encontrada hasta el momento.

Aquí te dejo los detalles del algoritmo de Kadane:

Inicializa dos variables: "max_actual" y "max_global", ambas en el valor 0.

Recorre el arreglo de izquierda a derecha.

En cada iteración, actualiza "max_actual" sumando el valor del elemento actual y comparando con el valor del elemento actual. Si el valor actual es mayor que la suma actual, entonces "max_actual" se actualiza con el valor actual.

Si "max_actual" es mayor que "max_global", actualiza "max_global" con el valor de "max_actual".

Continúa iterando hasta llegar al final del arreglo.

Al final del recorrido, "max_global" contendrá la suma máxima de una subsecuencia continua en el arreglo.

Por ejemplo, consideremos el arreglo [−2, 1, −3, 4, −1, 2, 1, −5, 4]. El algoritmo de Kadane seguiría los siguientes pasos:

Inicializa "max_actual" y "max_global" en -2.

Comienza a recorrer el arreglo:

En el primer elemento, la suma actual y el valor actual son iguales a -2.

En el segundo elemento, la suma actual se actualiza a 1, ya que -2 + 1 = -1 es menor que 1. "max_actual" y "max_global" se actualizan a 1.

En el tercer elemento, la suma actual se actualiza a -2, ya que 1 - 3 = -2 es mayor que -3. "max_actual" y "max_global" no cambian.

En el cuarto elemento, la suma actual se actualiza a 2, ya que -2 + 4 = 2 es mayor que 4. "max_actual" y "max_global" se actualizan a 4.

En el quinto elemento, la suma actual se actualiza a 3, ya que 4 - 1 = 3 es mayor que -1. "max_actual" y "max_global" no cambian.

En el sexto elemento, la suma actual se actualiza a 5, ya que 3 + 2 = 5 es mayor que 2. "max_actual" y "max_global" se actualizan a 5.

En el séptimo elemento, la suma actual se actualiza a 6, ya que 5 + 1 = 6 es mayor que 1. "max_actual" y "max_global" se actualizan a 6.

En el octavo elemento, la suma actual se actualiza a 1, ya que 6 - 5 = 1 es mayor que -5. "max_actual" y "max_global" no cambian.

En el noveno elemento, la suma actual se actualiza a 5, ya que 1 + 4 = 5 es mayor que 4. "max_actual" y "max_global" no cambian
