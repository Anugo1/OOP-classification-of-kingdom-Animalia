// This is the parent class from which subclasses will inherit. 
class Animalia {
    constructor (name, classification = "Animalia"  ){
        if(this.constructor === Animalia){
        throw new Error ('Class: AnimalKingdom cannot be instantiated.');
        }
    this.classification = classification;
    this.name = name;
    }


    #detect(){
        console.log(`Animals classified under ${this.name} are ${this.warmorcoldblooded} and ${this.backbone}.`);
        console.log(this); 
    }

           
   co
    // This shows Abstraction, a method is declarted but it's implementation details are hidden.
    detectself(){
        this.#detect();
    }

    animals(){
        console.log(`These animals are in the ${this.name} category`);
    }

   

}

class HasBackbone extends Animalia {
    constructor(name){
        super (name);
    if(this.constructor === HasBackbone){
        throw new Error (' it cannot be instantiated.');
    }

    this.backbone = ('has a backbone');
    }
}

// inheritance from the parent class 
class NoBackbone extends Animalia {
    constructor(name){
        super (name);
    if(this.constructor === NoBackbone){
        throw new Error ('it cannot be instantiated.');
    }
    
    this.backbone = ('it has no backbone');
    }
}

class Arthropoda extends NoBackbone {
    constructor (name) {
        super (name);
        this.warmorcoldblooded = ('cold blooded');
    }
    
    // This method is being overriden here and it's made to function different from when it was first declared above.
    // This shows polymorphism.

}

class Fish extends HasBackbone {
    constructor (name) {
        super (name);
        this.warmorcoldblooded = ('cold blooded');
    }



}

class Amphibia extends HasBackbone  {
    constructor (name) {
        super (name);
        this.warmorcoldblooded = ('cold blooded');
    }
 
}

class Reptile extends HasBackbone  {
    constructor (name) {
        super (name);
        this.warmorcoldblooded = ('cold blooded');
    }

}

class AVES extends HasBackbone  {
    constructor (name) {
        super (name);
        this.warmorcoldblooded = ('warm blooded');      
    }
  
}

class Mammal extends HasBackbone  {
    constructor (name) {
        super (name);
        this.warmorcoldblooded = ('warm blooded');
        
    }

}

/* ----------------------------------------------------------------
                Initialization of class 
----------------------------------------------------------------*/

const arthropoda = new Arthropoda ('Arthropoda');
const fish = new Fish ('Fish');
const amphibia = new Amphibia('Amphibia');
const reptile = new Reptile('Reptile');
const aves = new AVES('AVES');
const mammal = new Mammal('Mammal');

const animalia = [arthropoda, fish, amphibia, reptile, aves, mammal];




// This method will show all of our objects and explain the animal kingdom.
console.log("\n**********************CLASSIFICATION OF THE ANIMAL KINGDOM******************************\n");
console.log(animalia);

// Use the method below to get the attributes of any class. Eg:
// aves.detectself()

// Use the below method to get examples of animals under any class.Eg:
// mammal.animals()z