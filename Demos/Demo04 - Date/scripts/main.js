let today = new Date();

let birthdate = prompt('Veuillez introduire votre date de naissance au format : jj-mm-aaaa ou jj/mm/aaaa')
birthdate = birthdate.replaceAll('-','/');
//birthdate = birthdate.replace(/-/g,'/');

let birthdate_array = birthdate.split('/');

console.table(birthdate_array);

let bdate = new Date(birthdate_array[2] , birthdate_array[1]-1, birthdate_array[0]);


let approx_age = today.getFullYear() - bdate.getFullYear();

alert(`Wahouw vous avez ${approx_age}ans!`);

let today_ms = today.getTime();
let bdate_ms = bdate.getTime();

let age_ms = today_ms - bdate_ms;

let age_date = new Date(age_ms);
let age = age_date.getFullYear() - 1970;

alert(`Wahouw vous avez ${age}ans!`);

new Date();//Date système
new Date(-10000); //Date du 1/1/1970 - 10000 millisecondes
new Date(10000); //Date du 1/1/1970 + 10000 millisecondes
new Date(3000,11,31); //31 décembre 3000
new Date(3000,11,31,12,0,0,0); //31 décembre 3000 à midi pile


