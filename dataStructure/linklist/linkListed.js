class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty = () => {
        return this.size === 0;
    }

    getSize = () => {
        return this.size;
    }

    prepend = (value) => {
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print = () => {
        let listView = '';
        if(this.isEmpty()){
            return 'is empty'
        }else{
            let curr = this.head;
           
            while (curr) {
                listView += `${curr.value} => `
                curr = curr.next;
                
            }
          
        }
        return listView
    }
}


const list = new LinkList()

for(let i = 1; i <= 5; i++){
    list.prepend(i)
}


console.log(list.isEmpty());
console.log(list.getSize());
console.log(list.print())
