function List(){
    this.head = null;
}

function Node(value){
    this.value = value;
    this.next = null;
}

List.prototype.add = function(value){
    if(this.head === null) this.head = new Node(value)
    else{
        let refe = this.head;
        while(refe.next !== null){
            refe = refe.next
        }
        refe.next = new Node(value)
    }
}

let list = new List();

list.add(1);
list.add(2);
list.add(3);
list.add(4);