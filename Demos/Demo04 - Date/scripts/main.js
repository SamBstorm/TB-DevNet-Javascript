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
