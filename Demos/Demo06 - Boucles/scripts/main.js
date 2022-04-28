for (let i = 0; i < 10; i++) {
    console.log(i);
}

let tableau = [1,3,5,7,9];

//for of équivalant au foreach
for (const VALUE of tableau) {
    console.log(VALUE); //value correspond au valeur du tableau
}

tableau.forEach(
    (value, index) => console.log(`[${index}] : ${value}`)  //avantage du .forEach() nous pouvons récupérer la valeur et l'index
);

for (const index in tableau) {
    console.log(`[${index}] : ${tableau[index]}`);
}