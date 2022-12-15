class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
   getInfo(){
        console.log(this.name, this.age)
    }
}

// const animal1 = new Animal("Pukis", 1);

// animal1.getInfo();

export default Animal