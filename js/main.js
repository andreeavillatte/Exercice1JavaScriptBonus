// Je récupere les valeurs introduites en html, dans le formulaires en utilisant leur ID.
//  Il ne faut pas oublier .value!!!
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;

// J'attribue la function a mon button (j'ai ajouté l'ID a mon button dans le formulaire en html). 
// L'evenement addEventListener va declancher ma function quand je vais faire click sur le button.
document.getElementById('button').addEventListener('click', function () {
    var resultText = (firstNumber + " + " + secondNumber + " = " + Addition(firstNumber, secondNumber));
    alert(resultText);
});
// la function va retourner la somme effectue avec la premiere et la deuxieme valeur
function Addition(value1, value2) {
    return Number(value1) + Number(value2);
}