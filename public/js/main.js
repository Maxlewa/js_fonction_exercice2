// EXO 1

// let num = 851

// let reverseNumber = (num) => {
//     return (parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num))
// }

// console.log(reverseNumber(num));

// EXO 2

// let number = prompt("Nombre ?")
// let result = number / 2;

// let divPar2 = () => {
//     switch (number % 2 === 0) {
//         case true:
//             alert(`$${number} est divisible par 2 -> ${number} : 2 = ${result}`)
//             break;
    
//         default:
//             alert("Ce nombre n'est pas divisible par 2")
//             break;
//     }
//     return result
// }

// console.log(divPar2(result));

// EXO 3

// let mdp = prompt("Mot de passe ?")

// let logIn = () => {
//     while (mdp !== "mdp") {
//         mdp = prompt("Mot de passe ?")
//     }
//     if (mdp == "mdp") {
//         alert("Vous êtes connecté")
//     }
//     return mdp
// }

// console.log(logIn());

// SANS IF :

// let mdp = prompt("Mot de passe ?")

// let logIn = () => {
//     while (mdp !== "mdp") {
//         mdp = prompt("Mot de passe ?")
//     }
//     alert("Vous êtes connecté")
//     return mdp
// }

// console.log(logIn());

// EXO 4

let classe = []
let ajout = prompt("Veux-tu ajouter une personne ?")
let qui;
let ok;

let stagiaires = () => {
    while (ajout == "oui") {
        qui = prompt("Qui ?")
        classe.push(qui)
        ajout = prompt("Veux-tu ajouter une personne ?")
    } if (ajout == "non") {
        ok = prompt(`OK, voici la classe : ${classe}`)
    } else {
        alert("Erreur, répondez par oui ou par non svp")
    }
    return classe
}

console.log(stagiaires());