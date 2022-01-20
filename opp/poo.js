class Animal {
 

    constructor(nombre, especie){
        this.nombre = nombre; 
        this.especie = especie; 

    } 

    get getNombre (){
        return this.nombre; 

    }

    set setNombre(nombre) {
        this.nombre = nombre; 
    }

    get getEspecie (){
        return this.especie;
    }

    set setEspecie(especie){
        this.especie = especie; 
    }



    presentarse(){
        document.write(`hola soy ${this.especie} y me llamo ${this.nombre} <br>`)
    }

    cambiarNombre (nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es${this.nombre} y 
        soy un ${this.especie} <br>`
        return mensaje;
    }

static saludar(){
    return console.log('hola  soy un metodo estatico'); 
}

};

Animal.saludar();

console.log(Animal.getNombre);  


const Animal1  = new Animal("Fido"," Dog"); 
console.log(Animal1); 

const Animal2 = new Animal("Miaus", "Cat");
console.log(Animal2); 
const Animal3 =new Animal(); 
console.log(Animal3); 



Animal1.presentarse(); 
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre); 
Animal1.nombre = "guffy"; 
console.log(Animal1.nombre);
console.log(Animal1);

Animal.cambiarNombre("Oddie");

console.log(Animal1.getNombre); 
Animal1.setNombre("manchas"); 


console.log(Animal1); 







/* function constructor(){

} */