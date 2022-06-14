import { Queue } from "./Queue";

let queue = new Queue<number>();
queue.equeue(1);
queue.equeue(2);
queue.equeue(4);
queue.equeue(3);
console.log(queue.dequeue());