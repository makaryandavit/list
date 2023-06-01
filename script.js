class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    appendNode(newNode){
        let node = this.head;
        if(node==null){
            this.head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }

    insertAt(index, newNode){
        let node = this.head;
        if(index==0) {
            newNode.next = node;
            this.head = newNode;
            return;
        }
        while(--index){
            if(node.next!==null)
                node = node.next;
            else
                throw Error("chka nman index");
        }
        let tempVal = node.next;
        node.next = newNode;
        newNode.next = tempVal;
    }

    removeFrom(index){
        let node = this.head;
        if(index===0) {
            if(node!==null)
            {
                node = node.next;
                this.head = node;
            }
            else
                throw Error("chka nman index");
    
            return;
        }
        while(--index){
            if(node.next!==null)
                node = node.next;
            else
                throw Error("chka nman index");
        }
        node.next = node.next.next;
    }

    getNode(index){
        let node = this.head;
    
        if(index==0) {
            return this.head;
        }
        while(index--){
            if(node.next!==null)
                node = node.next;
            else
                throw Error("chka nman index");
        }
        return node;
    }

    clear() {
        this.head = null;
    }
}


class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

let myList = new LinkedList();
myList.appendNode(new Node(30));
myList.appendNode(new Node(11));
myList.appendNode(new Node(7));
myList.insertAt(0, new Node(19));
myList.removeFrom(2);
console.log(myList.getNode(2));
console.log(myList);