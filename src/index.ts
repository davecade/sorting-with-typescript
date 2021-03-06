import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

//-- Numbers data for sorting
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 2])
numbersCollection.sort();
console.log(numbersCollection.data)

//-- string data for sorting
const charactersCollection = new CharactersCollection('daveisthebest')
charactersCollection.sort();
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
nodesCollection.sort();
nodesCollection.print()

