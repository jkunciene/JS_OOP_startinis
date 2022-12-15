import Animal from './components/animal.js'

class Dog extends Animal{
    constructor(name, age, legs, fur){
        super(name, age);
        this.legs = legs;
        this.fur = fur;
    }

    printInfo(){
        super.getInfo()
        console.log(this.legs, this.fur);
    }
}

const dog1 = new Dog("Rikis", 3, 4, "baltas");
console.log(dog1);
dog1.printInfo();