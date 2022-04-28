const caractere = 'A';
let nb;
do {
    nb = parseInt(prompt('Veuillez indiquer le nombre de lignes : '));
} while (isNaN(nb) || nb <= 0);

//alert(`nb est de type ${typeof(nb)} et a pour valeur : ${nb}`)

let lettre = caractere;
for (let index = 0; index < nb; index++) {
    console.log(lettre);
    lettre += caractere;
}