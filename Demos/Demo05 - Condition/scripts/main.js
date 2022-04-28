let isFemale = confirm("Êtes-vous une femme?");

if (isFemale) {
    alert("Bonjour Madame!");
}
else if (confirm('Êtes-vous un Homme?')) {
    alert("Bonjour Monsieur!");
}
else {
    alert('Bonjour à vous!');
}

switch (new Date().getDay()) {
    case 0:
        alert('Nous sommes dimanche!');
        break;
    case 1:
        alert('Nous sommes lundi!');
        break;
    case 2:
        alert('Nous sommes mardi!');
        break;
    case 3:
        alert('Nous sommes mercredi!');
        break;
    case 4:
        alert('Nous sommes jeudi!');
        break;
    case 5:
        alert('Nous sommes vendredi!');
        break;
    case 6:
        alert('Nous sommes samedi!');
        break;
    default:
        console.error("Jour inexistant 🤷‍♂️");
        break;
}

try {
    let nb = parseInt(prompt('Entrer un nombre entier : '));
    if(isNaN(nb)){
        throw new Error("Le nombre est pas un nombre entier");
    }
    alert(nb);
} catch (error) {
    console.warn(`Une erreur a été interceptée : ${error}`);
}
