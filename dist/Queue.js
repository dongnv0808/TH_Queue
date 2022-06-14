"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.container = [];
    }
    equeue(element) {
        this.container.push(element);
    }
    dequeue() {
        return this.container.shift();
    }
    size() {
        return this.container.length;
    }
}
exports.Queue = Queue;
