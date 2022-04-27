let chaine = `ma formation javascript`;

// Retourner la position de « ma »
console.log(`La position du premier 'ma' est :${chaine.indexOf('ma')}`);
console.log(`La position du dernier 'ma' est :${chaine.lastIndexOf('ma')}`);

// Indiquer l’indice de la lettre « p »
console.log(`La position de 'p' est :${chaine.indexOf('p')}`);

// Retrouver la lettre située à l’indice 21
console.log(`Le caractère situé en indice 21 est :${chaine[21]}`);
console.log(`Le caractère situé en indice 21 est :${chaine.charAt(21)}`);
console.log(`Le caractère situé en indice 21 est :${chaine.substring(21,22)}`);
console.log(`Le caractère situé en indice 21 est :${chaine.slice(21,22)}`);
console.log(`Le caractère situé en indice 21 est :${String.fromCharCode(chaine.charCodeAt(21))}`);

//Remplacer « javascript » par « Java »
console.log(`"${chaine}"\ndevient\n"${chaine.replace('javascript','Java')}"`);
console.log(`"${chaine}"\ndevient\n"${chaine.replace('script','')}"`); //Seulement si on ne tient pas compte de la majuscule de Java

//Découper la chaîne avec le délimiteur «  » (espace)
console.log(`La chaîne "${chaine}" contient ${chaine.split(' ')}`);
console.table(chaine.split(' '));