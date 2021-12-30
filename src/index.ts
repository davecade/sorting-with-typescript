import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

//-- Numbers data for sorting
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 2])
const sortNumbers = new Sorter(numbersCollection)
sortNumbers.sort();
console.log(numbersCollection.data)

//-- string data for sorting
const charactersCollection = new CharactersCollection('daveisthebest')
const sortCharacters = new Sorter(charactersCollection)
sortCharacters.sort();
console.log(charactersCollection.data)

//-- Linked List data for sorting
const nodesCollection = new LinkedList()
nodesCollection.add(98)
nodesCollection.add(50)
nodesCollection.add(24)
nodesCollection.add(36)
nodesCollection.add(1)
nodesCollection.add(11)
nodesCollection.print()
console.log("SROTING Nodes....")
const sortedNodes = new Sorter(nodesCollection)
sortedNodes.sort();
nodesCollection.print()

