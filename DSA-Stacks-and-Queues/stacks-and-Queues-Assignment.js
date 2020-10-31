class _Node {
    constructor(data, next) {
        this.data=data;
        this.next=next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek() {
        console.log(`${this.top.data} is the top most item`);
        console.log('__________________');
    }

    isEmpty() {
        if(this.top === null) {
            console.log('The stack is empty');
        }else {
            console.log('The stack is not empty');
        }
        console.log('__________________');
    }

    display() {
        let currNode = this.top;

        if(!this.top) {
            console.log('The stack is empty');
        }

        while(currNode.next !== null) {
            console.log(currNode.data)

            if(currNode.next === null) {
                return null;
            }else {
                currNode = currNode.next;
            }
        }

        console.log(currNode.data);
        console.log('__________________');
    }

    findLast() {
        let currNode = this.top;

        if(!this.top) {
            console.log('The stack is empty');
        }

        while(currNode.next !== null) {

            currNode = currNode.next;

        }
        return currNode.value;
    }

    palindromeCheck(s) {
        let fullLength = s.length;

        let halfLength = Math.floor(s.length/2);

        let isPalindrome = true;

        for(let i = 0; i < s.length; i++) {
            this.push(s.charAt(i))
        }

        for(let i = 0; i < halfLength; i++) {
            let top = this.top;
            let compare = this.top;        

            for(let x=0; x < fullLength-i-1; x++) {
                compare = compare.next;

            }
            
            if(top.data !== compare.data) {
                isPalindrome = null;
                //return
            }
            this.pop();
            fullLength = fullLength - 1;
        }

        if(isPalindrome === true) {
            console.log(`${s} is a palindrome`)
        }else{
            console.log(`${s} is not a palindrome`)
        }
    }
}

module.esports = Stack;

function stackAssignment() {
    let starTrek = new Stack();
    
    console.log('Functions for question 2')
    starTrek.isEmpty();

    starTrek.push('Kirk');
    starTrek.display();

    starTrek.push('Spock');
    starTrek.display();

    starTrek.push('McCoy');
    starTrek.display();

    starTrek.push('Scotty');
    starTrek.display();

    starTrek.peek();

    starTrek.isEmpty();

    starTrek.pop();
    starTrek.display();

    starTrek.pop();
    starTrek.display();
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let palindrome = new Stack();

    palindrome.palindromeCheck(s);
    
}

//stackAssignment();
is_palindrome("dad");
is_palindrome("A man, a plan, a canal: Panama");
is_palindrome("1001");
is_palindrome("Tauhida");