// Importante: No modificar ni el nombre ni los argumentos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.


function minutosASegundos(minutos) {
  // Escribir una funcion que reciba un entero (minutos)
  // y retorne la cantidad de segundos
  // ej:
  // minutosASegundos(5) => 300
  // minutosASegundos(3) => 180
  // Tu código aca:
  var segundos=''
  segundos = Math.floor((minutos*3600)/60);  
  return segundos
 
}

function promedio(array) {
  // escribir una funcion que reciba un arreglo de enteros (array)
  // y retorne el promedio de esos numeros
  // ej:
  // promedio([1,2,3]) => 2
  // promedio([10, 20, 3]) => 11
  // Nota: Los numeros estan ordenados de menor a mayor.

  // Tu código aca:
  let suma = array.reduce((previous, current) => current += previous);
  let promedio = suma / array.length;
  return promedio
}

function salarioAnual(empleados, nombre) {
  // Escribe una funcion que reciba un arreglo de objetos con info de empleados (empleados)
  // y un string (nombre)
  // y retorne el salario anual del empleado con ese nombre;
  // ej: 
  // var empleados = [{
  //    nombre: 'Manuel',
  //    salario: 1000,
  //  },
  //  {
  //    nombre: 'Flor',
  //    salario: 4000,
  //  },
  //  {
  //    nombre: 'Maria',
  //    salario: 500,
  //  }
  // ];
  // salarioAnual(empleados, 'Flor'); => 48000
  // salarioAnual(empleados, 'Manuel;); => 12000
  // Tu código aca:

  return empleados.find(el => el.nombre==nombre).salario*12;
}

function encontrarLaPalabra(string) {
  // Escribir una funcion que reciba un string (string) y retorne true si encuentra la palabra "henry" adentro.
  // si no, retorna false.
  // Ej:
  // encontrarLaBomba('bienvenidos a henry') => true;
  // encontrarLaBomba('hola que tal, como va?!') => false;

  // Tu código:
  for(var i = 0; i < string.length; i++) {
    if(string.substr(i, 5) === "henry") {
      return true;
     }
    }
    return false;
}

function index() {
  // Escribi una función encontraIndex en el prototipo de Arrays,
  // que recibe un elemento.
  // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
  // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
  // Si no existe ese elemento la funcion debe devolver -1
  // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
  // ej:
  // var numeros = [5, 6, 4, 65, 8, 4]
  // numeros.encontraIndex(4) debe devolver 2.
  // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
  // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.

  // Tu código aca:
 Array.prototype.encontraIndex = function(numero){
   let pos=[];
   for (let i= 0; i < this.length; i++){
     if(numero === this[i]){
       pos.push(i);
     }
   }
   if(pos.length>0){
     return pos[0];
   }
   return -1;
 }
  };


function crearClaseEmpleado() {
  // Crear una clase para construir objetos de tipo Empleado.
  // el constructor debe recibir:
  // nombre (string) , salario (integer) , tareas (array de objetos), jefe (booleano - por defecto false) 

  return class Empleado {
    constructor(nombre, salario, tareas, jefe=false) {
      this.nombre = nombre;
      this.salario = salario;
      this.tareas = tareas;
      this.jefe = jefe;
    }

    addTarea(tarea, prioridad) {
      // el metodo addTarea recibe un string tarea y un entero prioridad y debe agregar un objeto:
      // { tarea: tarea, prioridad: prioridad} al arreglo de tareas del empleado.
      // no debe retornar nada.
      this.tareas.push({tarea, prioridad});
    }

    switchJefe() {
      // este método debe switchear el booleano jefe, si estaba en true, dejarlo en false
      // y si estaba en false, dejarlo en true
      // no debe retornar nada.
      this.jefe = !this.jefe;
    }


    getTareas() {
      // Escribe una función que retorne un arreglo con sólo los nombres (tarea) del arreglo de tareas
      // del empleado.
      // this.tareas = [
      //    {tarea: 'compras', prioridad: 1},
      //    {tarea: 'dar clases', prioridad: 3},
      //    {tarea: 'operaciones', prioridad: 2}
      //  ];
      // Ej:
      // persona.getTareas() // retorna ['compras', 'dar clases', 'operaciones']
      var nombreTarea = this.tareas.map((tarea) => tarea.tarea);
      return nombreTarea
  
  }
    

    getTareasPrioritarias(prioridad) {
      // Escribe una función que retorne las tareas con prioridad mayor al entero prioridad
      // ej, si la persona tuviera estas tareas:
      // {
      //   tareas: [{
      //     nombre: 'compras',
      //     prioridad: 4,
      //   }, {
      //     nombre: 'operaciones',
      //     prioridad: 2,
      //   }]
      // }
      // persona.getTareasPrioritarias(3) // retorna 
      // [{
      //  nombre: 'compras',
      //  prioridad: 4,
      // }]
      return this.tareas.filter(t => t.prioridad > prioridad);
    }

  };
  return new Empleado('Maia', 4000, ['operaciones'], true);
}

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
  var productos = [{
    price: 100,
    name: 'tv'
  }, {
    price: 50,
    name: 'phone'
  }, {
    price: 30,
    name: 'lamp'
  }];
  
  // Definir el método antes de ejecutar
  Array.prototype.filtrar = function(cb) {
    // Crear el arreglo que se va a devolver
    let newArray = [];
    // Recorrer elementos actuales
    this.forEach(item => {
        // Analizar el resultado de la función de retorno o "callback"
        if(cb(item)) {
            // Si devuelve verdadero, agregar elemento
            newArray.push(item);
        }
    });
    // Devolver arreglo filtrado
    return newArray;
  };
  
  // Ejecutar método de filtro proporcionando función de retorno o "callback"
  let filtrado = productos.filtrar(function(p) {
    // Incluir solo productos que cumplen esta condición
    return p.price >= 50;
  });
  
  // Mostrar resultado
  console.log(filtrado);
  
};

// No modifiques nada debajo de esta linea
//

module.exports = {
  minutosASegundos,
  promedio,
  encontrarLaPalabra,
  salarioAnual,
  crearClaseEmpleado,
  index,
  filtrar
}
