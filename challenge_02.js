/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let firstName = prompt("Bitte geben Sie einen Namen ein");
let age = Number(prompt("Bitte geben Sie ein Alter ein"));



console.log("Name: " + firstName);
console.log("Alter: " + age);


const cond = true;

switch(cond)
{
    case(age > 0 && age < 6):
        console.log( firstName + " trinkt Milch")
        break;
    case(age > 5 && age < 13):
        console.log( firstName + " trinkt Saft")
        break;
    case(age > 12 && age < 18):
        console.log( firstName + " trinkt Cola")
        break;
    case(age > 18):
        console.log( firstName + " trinkt Wein")
        break;
    default:
        console.log( "trink Wasser brudi")
        break;
}