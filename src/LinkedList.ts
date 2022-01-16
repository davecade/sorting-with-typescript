import { Sorter } from './sorter'

class Node {
    next: Node | null = null;
    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null;
    
    add(data: number): void {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        } else {
            //-- Iterate to last node, then add node at the end
            let pointer = this.head;
            while (pointer.next) {
                pointer = pointer.next;
            }

            pointer.next = node;
        }
    }

    get length(): number {
        let count = 0;

        if (this.head) {
            count++;
            let pointer = this.head;
            while (pointer.next) {
                count++;
                pointer = pointer.next;
            }
        }

        return count;
    }

    at(targetIndex: number): Node {
        if (!this.head) {
            throw new Error("index out of bounds");
        }

        let currentIndex = 0;
        let pointer: Node | null = this.head;

        while (pointer) {
            if (currentIndex === targetIndex) {
                return pointer;
            }
            currentIndex++;
            pointer = pointer.next;
        }

        throw new Error("Index out of bounds");
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error("List is empty");
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if(!this.head) {
            return;
        }

        let pointer: Node | null = this.head
        while(pointer) {
            console.log(pointer.data)
            pointer = pointer.next
        }
    }
}
