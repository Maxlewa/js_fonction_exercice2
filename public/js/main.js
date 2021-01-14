// EXO 1

// let num = 851

// let reverseNumber = (num) => {
//     return (parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num))
// }

// console.log(reverseNumber(num));

// AYHAN

// let chiffre = parseInt(prompt("Nombre ?"))
// let revNumber = (n) => {
//     n = n.toString().split("").reverse().join("");
//     return n
// }

// let nbr = revNumber(chiffre)
// console.log(nbr);

// EXO 2

// let number = parseInt(prompt("Nombre ?"))
// let result = number / 2;

// let divPar2 = () => {
//     switch (number % 2 === 0) {
//         case true:
//             alert(`${number} est divisible par 2 -> ${number} : 2 = ${result}`)
//             break;
    
//         default:
//             alert("Ce nombre n'est pas divisible par 2")
//             break;
//     }
//     return result
// }

// console.log(divPar2(result));

// CHECK AYHAN CORRECTION, + EXACT

// EXO 3

// let mdp = prompt("Mot de passe ?")

// let logIn = (a) => {
//     while (a !== "mdp") {
//         a = prompt("Mot de passe ?")
//     }
//     if (a == "mdp") {
//         alert("Vous êtes connecté")
//     }
// }

// console.log(logIn());

// POSSIBLE AUSSI AVEC UN COUNT, VOIR CORRECTION

// EXO 4

let coding16 = []

let rentrer = (a) => {
    let tab = a.split(" ")
    coding16.push(...tab)
    coding16.forEach(el => {
        console.log(`${el} est rentré, salut`);
    });
}

let sortir = (a) => {
    coding16.pow(a)
}

let personne = prompt("Qui faire entrer ?")
rentrer(personne)

console.log(coding16);

// CHECK CORRECTION AYHAN