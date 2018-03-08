'use strict';


//*********************************************************************
//*                                                                   *
//*                 	  SCOPES & CLOSURES      			          *
//*                                                                   *
//*********************************************************************

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//          IIFE (ifi)   immediately-invoked function expression 
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//     (function(){
//         var a = "Expresion anónima auto ejecturable";
//         var b = "crear scope propio para las variables no sean Global";

//         console.log(a+"\n"+b);
//     })();
   

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    SCOPES | definición | local vs global | function Scope & block Scope
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	/*  

		::::SOCPES:::: 
			Se refiere a la visibilidad de variables y métodos de una parte de un código en otra parte de ese código. 
			variables globales son accesibles desde cualquier parte del código. Variables locales son acceseblies solo dentro de su scope.

		
		En JS los scopes son creados pro funciones.

			function foo(){
				//this is a function scope
			}

	
		ES6 introduce block scope.

			{
				//this is a block scope
			}



		window es el global object en los nagadores. Cada global var y global fuction que se crea es una propiedad del global object.

	*/


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//	        		 Compilación e Interpretación
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	/*

	
		::::Lenguaje Compilado::::
			Un lenguaje compilado es aquel cuyo código fuente, escrito en un lenguaje de alto nivel,
			es traducido por un compilador a un archivo ejecutable entendible para la máquina.
			Son más rápidos.
		


		::::Lenguaje interpretado::::
			las instrucciones se traducen una a una cada vez que se ejecuta el programa.
			Son 10 veces más lentons que los programas compilados.
			Facilidad para lograra independencia de platadormas  y menor tamaño de programa
		
		JavaScrip es ambos. Hay un primer paso de compilación y luego uno de interpretación.



		PASOS:

		1) 	La etapa de copilación solo examina las declaraciones de variables, funciones y scopes. 
			Los argumentos pasados en las funciones son variables dentro del scope de su función.
			La etapa de compilación ignora los valores asignados a las variables, solo le importa su declaración

				var a = [esto no importa] 
				function foo(argumento){
					var b = [esto no importa];
					[esto no importa];
				}
				
				//-> Global scope: var a, function foo
					 function foo scope: var argumento, var b	


			* Si no se usa una variable no declarada (sin el var)  dentro de una función JS la crea automaticamente, pero en el global scope. 
			la variable es ignorada en el proceso de compilación y es creada en el global durante la ejecución.

			* La variable foo del siguiente ejemplo, se compila durante la etapa de compilación, donde no importa su valor,
			durante la ejecución su valor será undefined porque es asignado luego del console.log

			console.log(foo);
			var foo = 10;
			//-> undefine.



		2)  Proceso de ejecución/interpretación.
			Toma las variables e interroga a la cadena de scopes si la encuentra para asignarles valor y ejecutar las funciones, sino encuentra una variable,
			baja un nivel hasta llegar al global scope. 

	*/


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//	         HOISTING  (se hace durante la copilación)
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	/*
		HOISTING: Las variables y funciones declaradas, son puestas arriba de todo durante el proceso de compilación, No sus valores, sino declaración

				console.log(a);																
				b++;		
				c = 10;													
				
				var a;												
				var b;
				var c;

				after hoisting queda así:

				var a;												
				var b;
				var c;

				console.log(a);																
				b++	
				c = 10;		


			Fuctions Declarations vs Function Expresions hoisting. 

				::::::Fuctions Declarations::::::

				foo();
				function foo(){
					//acción 
				}
				// foo se ejecuta antes de ser declarada, pero el hoisting la pone arriba durante la copilación así que la función se ejecuta sin problemas.
				
				::::::Fuctions Expresion::::::

				foo();
				var foo = function(){
					//accion
				}
				// la función foo se ejecuta, pero durante la compilación lo que se puso arriba fue una variable (var foo) que no tiene asignado nada. Así que no funciona.

	*/



//*********************************************************************
//*                                                                   *
//*                  		   CLOSURES            			          *
//*                                                                   *
//*********************************************************************       


	/*
	Closure es una función interna a otra función. 
	
	Un closure es un tipo especial de objeto que combina dos cosas: una función, y el entorno en que se creó esa función.
	El entorno está formado por las variables locales que estaban dentro del alcance en el momento que se creó el closure. 

	*/
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//			Ejemplo Closure
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::	



		// function creadorDeContadores() {
		// 	let actual = 0
		// 	const agregar = function() {
		// 		actual++;
		// 		return actual
		// 	}
		// 	return agregar
		// }

		// const contador = creadorDeContadores()

		// for (var i = 0; i <= 2; i++) {	
		// 	const c1 = contador()
		// 	console.log(c1)
		// } 




//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//			Ejemplo Closure
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// 	/*
	// 	//https://developer.mozilla.org/es/docs/Web/JavaScript/Closures
	// 	suma5 y suma10 son ambos closures. Comparten la misma definición de cuerpo de función, 
	// 	pero almacenan diferentes entornos.	 En el entorno suma5, x es 5. En lo que respecta a suma10, x es 10.

	// 	*/
	// 	 function creaSumador(x) {
	// 	  return function(y) {
	// 	    return x + y;
	// 	  };
	// 	}

	// 	var sumar10 = creaSumador(10);
	// 	var sumar20 = creaSumador(20);
		
	// 	console.log(sumar10(5));
	// 	console.log(sumar20(5));


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//			Ejemplo Closure
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	// function bar(fn){
	// 	fn();
	// }

	// function foo(){
	// 	var a =2;
		
	// 	function baz(){
	// 		console.log(a);
	// 	}
	// 	bar(baz);
	// }



	var fn;

	function foo(){
		var a =2;

 		function baz(){
 			console.log(a);
 		}

 		fn = baz;
	}

	function bar(){
		fn()
	}

	foo();
	bar();




