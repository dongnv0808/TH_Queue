"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = require("./Queue");
let queue = new Queue_1.Queue();
queue.equeue(1);
queue.equeue(2);
queue.equeue(4);
queue.equeue(3);
console.log(queue.dequeue());
