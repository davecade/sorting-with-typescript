"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
//-- Numbers data for sorting
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);
//-- string data for sorting
// const charactersCollection = new CharactersCollection('daveisthebest')
// charactersCollection.sort();
// console.log(charactersCollection.data)
//-- Linked List data for sorting
// const nodesCollection = new LinkedList()
// nodesCollection.add(98)
// nodesCollection.add(50)
// nodesCollection.add(24)
// nodesCollection.add(36)
// nodesCollection.add(1)
// nodesCollection.add(11)
// nodesCollection.print()
// console.log("SROTING Nodes....")
// nodesCollection.sort();
// nodesCollection.print()
