# Busqueda Binaria


 La búsqueda binaria es un algoritmo de búsqueda eficiente para encontrar un elemento específico en un arreglo ordenado. El proceso consiste en dividir repetidamente el arreglo en mitades, descartando la mitad que no contiene el elemento buscado hasta que el elemento sea encontrado o se haya determinado que no existe en el arreglo.

Aquí te dejo una explicación paso a paso de cómo funciona la búsqueda binaria con un arreglo:

Comienza con un arreglo ordenado de elementos. Por ejemplo, [2, 5, 8, 12, 16, 23, 38, 56, 72, 91].

Define dos variables, "inicio" y "fin", que representen el índice del primer y último elemento del arreglo.

Encuentra el índice del elemento que está en el medio del arreglo. Para hacer esto, suma "inicio" y "fin" y divide el resultado entre 2. Este índice será el punto de división para dividir el arreglo en dos mitades.

Compara el elemento en el índice medio con el elemento que buscas. Si el elemento buscado es igual al elemento en el índice medio, entonces has encontrado el elemento que buscas y puedes detener la búsqueda.

Si el elemento buscado es mayor que el elemento en el índice medio, descarta la mitad inferior del arreglo (es decir, los elementos desde "inicio" hasta el índice medio) y redefine "inicio" como el índice siguiente al índice medio.

Si el elemento buscado es menor que el elemento en el índice medio, descarta la mitad superior del arreglo (es decir, los elementos desde el índice medio hasta "fin") y redefine "fin" como el índice anterior al índice medio.

Repite los pasos 3 a 6 hasta que encuentres el elemento buscado o hayas determinado que no existe en el arreglo.

En el ejemplo anterior, si buscas el número 23, el proceso sería el siguiente:

El arreglo es [2, 5, 8, 12, 16, 23, 38, 56, 72, 91].

"inicio" es 0 y "fin" es 9.

El índice medio es (0 + 9) / 2 = 4. El elemento en el índice medio es 16.

23 es mayor que 16, por lo que descartas la mitad inferior del arreglo y redefinas "inicio" como el índice siguiente al índice medio (es decir, 5).

El nuevo índice medio es (5 + 9) / 2 = 7. El elemento en el índice medio es 56.

23 es menor que 56, por lo que descartas la mitad superior del arreglo y redefinas "fin" como el índice anterior al índice medio (es decir, 6).

El nuevo índice medio es (5 + 6) / 2 = 5. El elemento en el índice medio es 23. Has encontrado el elemento que buscas.

Espero que esta explicación te haya ayudado a entender cómo funciona la búsqueda binaria con un arreglo.
