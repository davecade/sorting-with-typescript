"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
//-- Numbers data for sorting
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 2]);
var sortNumbers = new sorter_1.Sorter(numbersCollection);
sortNumbers.sort();
console.log(numbersCollection.data);
//-- string data for sorting
var charactersCollection = new CharactersCollection_1.CharactersCollection('daveisthebest');
var sortCharacters = new sorter_1.Sorter(charactersCollection);
sortCharacters.sort();
console.log(charactersCollection.data);
//-- Linked List data for sorting
var nodesCollection = new LinkedList_1.LinkedList(6);
nodesCollection.add(98);
nodesCollection.add(50);
nodesCollection.add(24);
nodesCollection.add(36);
nodesCollection.add(1);
nodesCollection.add(11);
nodesCollection.print();
console.log("SROTING Nodes....");
var sortedNodes = new sorter_1.Sorter(nodesCollection);
sortedNodes.sort();
nodesCollection.print();
