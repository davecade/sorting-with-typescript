import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 2])
const sortNumbers = new Sorter(numbersCollection)
sortNumbers.sort();
console.log(numbersCollection.data)


const charactersCollection = new CharactersCollection('daveisthebest')
const sortCharacters = new Sorter(charactersCollection)
sortCharacters.sort();
console.log(charactersCollection.data)
