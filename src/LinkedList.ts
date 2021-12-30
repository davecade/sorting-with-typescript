class Node {
    next: Node | null = null;
    constructor(public data: number) {}
}

export class LinkedList {
    head: Node | null = null;

    constructor(head: Node) {
        this.head = head;
    }

    add(data: number): void {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        } else {
            //-- Iterate to last node, then add node
            let pointer = this.head;
            while (pointer.next) {
                pointer = pointer.next;
            }

            pointer.next = node;
        }
    }
}
