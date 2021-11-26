class Sorter {
    constructor(public collection: number[] | String) {}

    sort(): void {
        const { length } = this.collection;

        for(let  i = 0; i<length; i++) {
            for(let j = 0; j<length-i-1; i++) {


                //-- if collection is arry
                if(this.collection[j] > this.collection[j+1]){
                    const temp = this.collection[j]
                    this.collection[j] = this.collection[j+1]
                    this.collection[j+1] = temp
                }

                //-- if collection is a string, do this
                //-- compare and swap in string
            }
        }
    }

}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort();
console.log(sorter.collection)