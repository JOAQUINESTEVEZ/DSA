// TIME COMPLEXITY:
// INSERTION: O(1)
// REMOVAL: O(1)

class Stack {
    constructor() {
        this.items = [];
    }
    push(item){
        this.items.push(item);
        return item + " inserted";
    }
    pop(){
        if (this.isEmpty()){
            return "Underflow";
        }
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    printStack(){
        let str = "";
        for(let i = 0; i < this.items.length; i++){
            str += this.items[i] + " ";
        }
        return str;
    }
}


const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.printStack());
