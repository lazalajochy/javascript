class Queue{
    constructor(){
        this.items = []
    };

    enqueue = (element) => {
        return this.items.push(element)
    }

    dequeue = () => {
        return this.items.shift()
    }

    peek = () => {
        return this.items[this.items.length -1]
    }

    isEmpty = () => {
        return this.items.length === 0;
    }

    size = () => {
        return this.items.length;
    }

    print = () => {
        return this.items;
    }
}


const queue = new Queue();
for(let i = 1; i <= 10; i++){
    queue.enqueue(i)
}
//queue.dequeue();
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.print());
console.log(queue)