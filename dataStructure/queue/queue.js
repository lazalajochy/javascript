class Queue{
    constructor(){
        this.items = {}
        this.rear = 0;
        this.front = 0;
    };

    enqueue = (element) => {
       this.items[this.rear] = element;
       this.rear++;
    }

    dequeue = () => {
        const item = this.items[this.front];
        delete  this.items[this.front];
        this.front++
        return item;
    }

    peek = () => {
        return this.items[this.front]
    }

    isEmpty = () => {
        return this.rear - this.front === 0;
    }

    size = () => {
        return this.rear - this.front
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