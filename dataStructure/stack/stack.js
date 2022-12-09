class Stack{
    constructor(){
        this.items = [];
    };

    add = (element) => {
        this.items.push(element)
    }

    pop = () => {
        this.items.pop();
    }

    peek = () => {
        return this.items[this.items.length - 1]
    }

    isEmpty = () => {
        return this.items.length === 0
    }

    size = () => {
        return this.items.length;
    }

    print = () => {
       return this.items.toString()
    } 
}



const stack = new Stack();
stack.add(1)
stack.add(2)
stack.add(3)
stack.add(4)
stack.add(5)
console.log(stack.size())
console.log(stack.peek())
stack.pop();
console.log(stack.print())
console.log(stack.isEmpty())
console.log(stack)