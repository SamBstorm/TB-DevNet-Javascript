const TVA = 1.21;
let price = parseFloat(prompt('Veuillez indiquer le prix d\'un livre HTC :'));
let quantity = parseInt(prompt('Veuillez indiquer le nombre de livres :'));
let total = price * quantity * TVA;
let message = (isNaN(total))?'Erreur de calcul...':`Le prix TTC est de ${total.toFixed(2)}€.`;
alert(message);