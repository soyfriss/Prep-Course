// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  // var keys = Object.keys(objeto);
  // var values = Object.values(objeto);
  // var array = [];
  // for (var i=0; i < keys.length; i++) {
  //   array.push([keys[i], values[i]]);
  // }
  // return array;

  var array = [];
  for (let clave in objeto) {
    array.push([clave, objeto[clave]]);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var letra = '';
  var objeto = {};

  for (var i = 0; i < string.length; i++) {
    letra = string[i];

    objeto[letra] = (objeto[letra] || 0) + 1;
  }

  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var letrasMayusculas = '';
  var letrasMinusculas = '';
  var letra = '';

  for (var i = 0; i < s.length; i++) {
    letra = s[i];
    if (letra === letra.toUpperCase()) {
      // Es mayúscula
      letrasMayusculas += letra;
    } else {
      // Es minúscula
      letrasMinusculas += letra;
    }
  }
  return letrasMayusculas + letrasMinusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var fraseInvertida = '';
  var palabras = str.split(' ');

  // Recorro cada palabra de la frase recibida (array palabras)
  // Invierto la palabra y la agrego a la frase nueva junto con los espacios entra cada palabra
  palabras.forEach(function (palabra, indice) {
    // Invierto los caracteres de la palabra
    for (var i = palabra.length; i > 0; i--) {
      fraseInvertida += palabra[i - 1];
    }
    // Agrego los espacios entre palabras salvo en la última palabra
    if (indice != palabras.length - 1) {
      fraseInvertida += ' ';
    }
  });
  return fraseInvertida;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroOriginal = '' + numero;
  var numeroInvertido = '';
  for (var i = numeroOriginal.length; i > 0; i--) {
    numeroInvertido += numeroOriginal[i - 1];
  }
  if (numeroOriginal === numeroInvertido) {
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = '';
  var letra = '';
  for (var i = 0; i < cadena.length; i++) {
    letra = cadena[i];
    if (letra !== 'a' && letra !== 'b' && letra !== 'c') {
      nuevaCadena += letra;
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  // Implementación con la función sort()
  // arr.sort(function(a, b) {
  //   return a.length - b.length;
  // })
  // return arr;

  // Nueva implementación
  var nuevoArr = [];  // El array ordenado
  var palabra = '';
  var posicion = 0;   // la nueva posición que va a tomar cada palabra
  for (var i = 0; i < arr.length; i++) {
    palabra = arr[i];

    // Comparo la palabra contra las demás y obtengo la nueva posición
    posicion = 0;
    for (var j = 0; j < arr.length; j++) {
      // Si el tamaño de la palabra es mayor a la que se compara sumo 1 a posición
      if (palabra.length > arr[j].length) {
        posicion++;
      }
      // Si es igual al tamaño y está más atrás de la que se compara sumo 1 a posición
      if (palabra.length == arr[j].length && i > j) {
        posicion++;
      }
    }

    nuevoArr[posicion] = palabra;  // asigno la palabra en la nueva posición
  }
  return nuevoArr;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var interseccion = [];
  arreglo1.forEach(function (a) {
    arreglo2.forEach(function (b) {
      if (a === b) {
        interseccion.push(a);
      }
    });
  });
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

