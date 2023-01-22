//https://4tomik.github.io/event-loop/

debugger

console.log("Hello");

//setTimeout(() => console.log("Time"),4000);

fetch('https://jsonplaceholder.typicode.com/todos/1')  
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


console.log("World")