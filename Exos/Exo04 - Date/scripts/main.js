let final_hour = parseInt(prompt("Veuillez indiquer l'heure de fin du cours :"));

let today = new Date();
let final_date = new Date(today.getFullYear(), today.getMonth(), today.getDate(),final_hour,0,0,0);
/*
final_date = today;
final_date.setHours(final_hour);
final_date.setMinutes(0);
final_date.setSecondes(0);
final_date.setMillisecondes(0);
*/
let today_ms = today.getTime();
let final_ms = final_date.getTime();

alert(`Il reste ${final_ms - today_ms} millisecondes.`);

let today_start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
let result = new Date(today_start.getTime() + final_ms - today_ms);
alert(result);
alert(`Il reste ${result.getHours()}:${result.getMinutes()}:${result.getSeconds()}:${result.getMilliseconds()}.`);
