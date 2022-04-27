let text = "Et si tout n'était qu'une illusion et que rien n'existait ? Dans ce cas j'ai vraiment payé trop cher pour ce tapis.";

//Récupération d'un caractère spécifique
console.log(`Nous recherchons le caractère situé en position 15 dans ${text}`);
console.log(text.charAt(14));   //Position 0 = E : Retourne le caractère
console.log(text[14]);          //Position 0 = E : Retourne le caractère (comme dans un tableau)
console.log(text.charCodeAt(14));   //Position 0 = E : Retourne le code caractère
console.log(`Le premier caractère a pour index 0, alors le 15ième caractère à pour index 14`);

//Concaténation
text = text.concat(` - Woody Allen`);
text = text + ` - Woody Allen`;
text = `${text} - Woody Allen`;
text += ` - Woody Allen`;

console.log(text);

//Création de text à partir de code caractères
let salutArray = [83,97,108,117,116];
console.table(salutArray);
let salutString = String.fromCharCode(...salutArray);   // le SpreadOpérator '...' permet de décomposer un tableau en différentes variables
console.log(salutString);

//Retrouver un caractère spécifique
let email = 'samuel.legrain@bstorm.be';
let position = email.indexOf('@');
console.log(`Dans '${email}' le '@' est en position ${position}.`);
position = email.indexOf('e');
console.log(`Dans '${email}' le premier 'e' est en position ${position}.`);
position = email.lastIndexOf('e');
console.log(`Dans '${email}' le dernier 'e' est en position ${position}.`);
position = email.indexOf('ç');
console.log(`Dans '${email}' le 'ç' est en position ${position}.`);
position = email.indexOf('.be');
console.log(`Dans '${email}' le '.be' est en position ${position}.`);

//Récupération d'une patie de texte
position = email.indexOf('@');
let domaine = email.substring(position+1, email.length);        //Il récupère une partir du text, qui commence à une certaine position et fini à une autre position.
console.log(`Dans '${email}' le nom de domaine est ${domaine}.`)

//Utilisation des regex (Regular Expression) voir page 187 des slides
let regexEmail = /^[a-z0-9.-=$]+@[a-z0-9.-=$]+\.[a-zA-Z]{2,3}$/gmi;
let emails = `sam.fait.rire\nsamuel.legrain@bstorm.be\nmichael.person@cognitic.be\naude.beurive@bstorm.be\nsam.fait.rire`;
console.log(emails.match(regexEmail));
console.log(emails.search(regexEmail));

console.log(emails.replace(regexEmail, 'Confidentiel'));
console.log('toto'.replace('o','i'));       //toto devient tito, car avec les caractères, il ne remplace que le premier correspondant
console.log('toto'.replace(/o/g,'i'));      //toto devient titi, car avec les expression régulières, il remplace tout caractère correspondant (attention de finir avec l'option /g)

console.log(emails);
console.table(emails.split('\n'));
console.table('Arthur | Rimbeau | Les fleurs du mal | 1993 | Edition pocket | 12345678911'.split(' | '));


console.log('TOTO'.toLowerCase()) //'toto'
console.log('toto'.toUpperCase()) //'TOTO'