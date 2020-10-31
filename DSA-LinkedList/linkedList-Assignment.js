class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, beforeItem) {
        let currNode = this.head;
        let lastNode = null;

        if(!this.head) {
            return null;
        }

        while(currNode.value !== beforeItem) {

            if(currNode.next === null) {
                console.log('The item you are trying to place something before does not exist');;
                return
            }else{
                lastNode = currNode;
                currNode = currNode.next;
            }
        }
        let next = lastNode.next;

        lastNode.next = item;

        item.next = next;
    }

    insertAfter(item, afterItem) {
        let next = afterItem.next;

        afterItem.next = item;

        item.next = next;
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    logWholeList() {
        // sets currNode to the front of the linkList
        let currNode = this.head;

        // if the head is null the list is empty
        if (!this.head) {
            console.log('This link list is empty.');
        }

        // iterates through the list, checking if next is null, if it isnt, it moves the the next and logs the current
        while(currNode.next !== null) {

            console.log(currNode.value)

            if(currNode.next === null) {
                
                return null;
            }else {
                currNode = currNode.next
            }
        }
        console.log(currNode.value)
        console.log('----------------');
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

module.exports = LinkedList;

/*
function main() {
    var newList = new LinkedList();

    newList.insertFirst('Appolo');

    newList.insertLast('Boomer');

    newList.insertLast('Helo');

    newList.insertLast('Husker');

    newList.insertLast('Starbuck');

    newList.insertLast('Tuahida');

    newList.remove('Husker');

    newList.logWholeList();

    newList.insertBefore(new _Node('Tami', null), 'Helo');

    newList.logWholeList();

    newList.insertAfter(new _Node('Samuel',null), newList.find('Helo'));

    newList.logWholeList();

}

main();
*/