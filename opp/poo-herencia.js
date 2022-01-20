class Pokemon {
    constructor(nombre, tipo){
            this.nombre = nombre; 
            this.tipo = tipo;
    }


    atacar(){
        return console.log(`${this.nombre} esta atcando`)
    }
}

class Picachu extends Pokemon{
    constructor(nombre, tipo, edad){
        super(nombre, tipo); 
        this.edad = edad; 
    }

    evolucionar (){
        return console.log(`${this.nombre} esta evolucionando`)
    }
}

const Picachu1 = new Picachu("jesucristo", "salvador", 15);
console.log(Picachu1); 




Picachu1.atacar(); 



const Charmander = new Pokemon ('charmander', 'fuego'); 
Pokemon1.atacar(); 