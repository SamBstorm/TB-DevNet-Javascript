//Déclaration d'un variable : var ou let ?
//var permet de créer une variable global : Attention peut écraser une variable existante
//let permet de créer une variable local : Attention, n'est accessible qu'à partir de son bloc

//Constante : variable dont la valeur est protégée
//Attention , il faut définir sa valeur dès la déclaration

const BEST_PROF = 'Samuel';


//Type string
let firstName = 'Samuel';
firstName = "Samuel";
firstName = `Samuel`; // le caractère `` permet d'ajouter des valeurs extérieurs au texte grâce ${}

//Type number
let nb1 = 4;        //Aucune différence entre entier et décimal
let nb2 = 3.21;

nb1 = parseInt("42"); // Conversion en entier du texte                  :Attention cela reste un number
nb2 = parseFloat("4.21"); // Conversion en décimal du texte             :Attention cela reste un number

let erreur = parseInt("Toto"); //Erreur de conversion obtient un NaN    :Attention cela reste un number

let infini = 10 / 0; // Récupération d'Infinity                         :Attention cela reste un number

//Type boolean
let isOk = true;
isOk = false;

//Type undefined
//Défini un type qui n'a pas encore de valeur, et donc pas de type non-plus

let noValue; //Est undefined
let noType = undefined ; //Est undefined

//Type null (object)
//Défini un type object n'ayant pas encore de référence enregistré

let noObject = null // C'est un object sans référence.

//Vérifer un type
//typeof retourne toujours le type écris dans une string
typeof(firstName)   //Retourne 'string'
typeof(nb1)         //Retourne 'number'
typeof(erreur)      //Retourne 'number' (même si NaN)
typeof(infini)      //Retourne 'number' (même si Infinity)
typeof(isOk)        //Retourne 'boolean'
typeof(noValue)     //Retourne 'undefined'
typeof(noObject)    //Retourne 'object'

//Vérifier si un type number est NaN
isNaN(nb1)      //Retourne false car c'est un nombre
isNaN(erreur)   //Retourne true car c'est un NaN
isNaN(infini)   //Retourne false car c'est un nombre