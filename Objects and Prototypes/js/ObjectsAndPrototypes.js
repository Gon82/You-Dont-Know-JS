

//*********************************************************************
//*                                                                   *
//*                  Objects and Prototypes In-depth                  *
//*                                                                   *
//*********************************************************************

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//               Metodos llamar función y valor This 
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    /*

    //:::::::::  metodo #1 de crear objeto 

    var politico1 = {
        "nombre" : "Nestor",
        "Apellido" : "Kirchner",
        "partido" : "FPV",
    }

    //::::::::: metodo #2 función en el contexto de un objeto

    function PoliticoObjet (nombre, apellido, partido){
        var nuevoPolitco = {};
        nuevoPolitco.nombre = nombre;
        nuevoPolitco.apellido = apellido;
        nuevoPolitco.partido = partido;
        return nuevoPolitco;
    }
    var politico2 = PoliticoObjet("Cristina", "Fernandez", "FPV");



    //::::::::: metodo #3 de crear objeto 
    function PoliticoNew (nombre, apellido, partido){
        //var this = {};
        this.nombre = nombre;
        this.apellido = apellido;
        this.partido = partido;
        //return this;
    }
    var politico3 = new PoliticoNew("Guillermo", "Moreno", "LNK");  // el new ahorra los pasos comentados en la función.

    */


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//                 ejercicio call (Cristina - Moreno.)
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

   
    // var vengoBancado = "vengo bancando este proyecto,";
    // var peronPeron = "Perón perón, que grande sos, mi general cuanto valés";
    
    // function Politicos (nombre, apellido, partido, marcha){
        
    //     this.nombre = nombre;
    //     this.apellido = apellido;
    //     this.partido = partido;
    //     this.marcha = marcha;
    //     this.arenga = function(){
    //         alert(this.marcha);         
    //     }
    //     this.heritaje = function(){
    //         console.table(this);
    //     }
        
    // }
    // var cristina = new Politicos ("Cristina", "Fernandez", "Unidad Ciudadana", vengoBancado);
    // var moreno = new Politicos ("Guillermo", "Moreno", "La Nestor K", peronPeron); 

    // //console.log(cristina.arenga.call(moreno)); //->  "Perón perón, que grande sos, mi general cuanto valés"

    // //agrego el objeto hijos después
   
    // var hijos = {
    //     "hijo" : "Máximo",
    //     "hija" : "Florencia",
    // }
    // cristina.hijos = hijos;


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//                   Ejercicios (Prototypes)
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    // function Personas (nombre,sexo){
    //     this.nombre = nombre;
    //     this.sexo   = sexo;
    // };
    
    // const perci   = new Personas("Perci","mujer");
    // const piorjor = new Personas("Piorjor","varon");
    // const gladys  = new Personas("Gladys","mujer");

    
    // //      propiedad escupir hecha en objeto 
    // //      piorjor.escupir == perci.escupir 
    // //->    false
    // perci.escupir   = { escupir : "jjjjjpffff", }
    // piorjor.escupir = { escupir : "jjjjjpffff", }


    // //      propiedad saludar hecha con prototype 
    // //      piorjor.saludar === perci.saludar
    // //-->   true 
    // Personas.prototype.saludar = function(comentario){
    //     if(comentario == undefined ){
    //         console.log(this)
    //         const arrayMujer =["Las que te adornan.", "Qué sonrisa eh, ¿te atendió tu marido esta mañana?.", "Hermoso día para verte las tetas.", "Que culo mami.", "Sabés como te doy."];
    //         const arrayVaron =["¿Cómo anda cavallero", "Usted siempre tan elegante.", "Una alegría verlo", "Usted siempre tan elegante"];
    //         const numeroRandom = function ( minimo, maximo ) {
    //             return Math.floor(Math.random()*(maximo-minimo+1)+minimo); // formula robada para hacer un random entre un mínimo y un máximo.
    //         }
            
    //         if (this.sexo == "varon"){
    //             comentario = arrayVaron[ numeroRandom( 0, arrayVaron.length-1) ]
    //         }
    //         if(this.sexo == "mujer"){
    //             comentario = arrayMujer[ numeroRandom( 0, arrayMujer.length-1) ]
    //         }
    //     }
    //     console.log("Buenos días " + this.nombre + ". " + comentario);
    // }
    

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//                  Ejercicios Heritage Objects
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


    // function Argentino(nombre){
    //     this.nonmbre = nombre;      
    // }

    // Argentino.prototype.pais = "Argentina"; //  Asigno propiedad *pais* a prototype para que hijos lo hereden.

    // var azrael = new Argentino("Azrael");
    // var nacho =  new Argentino("Ignacio");


    // function Peronista(nombre){
    //     this.nonmbre = nombre;  
    //     this.partido = "peronista";
    //     this.nadaMejor = function(otroArg){
    //         if(otroArg.partido == "peronista"){
    //             console.log("Compañero")
    //         }
    //         else{
    //            console.log("Gorila hijo de puta")
    //         }
    //     } 
    // }

    // var gon = new Peronista ("Gon");
    // var dino = new Peronista("Lino");


    // dino.__proto__.__proto__ ===  Peronista.prototype.__proto__; //-> true

    // Peronista.prototype.__proto__ = Argentino.prototype;  // Peronistas heredan Argentino.prototype
 

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//               Metodos llamar función y valor This 
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    /*

    //::::::::: Método #1

    foo();                      //simple función //->valor "this" == global objet (window)


    //::::::::: Método #2

    miObjeto.foo();             //función en el contexto de un objeto  //-> valor "this" == miObjeto


    //::::::::: Método #3

    new foo();                  //función new //-> valor "this" == nuevo objeto creado por la función


    //::::::::: Método #4

    foo.call(objeto)            // cap 9 video //-> valor "this" == lo define call  // foo() == foo.call() // entonces para que se usa? para enlazar una funcion de un objeto con otro.  


    */





