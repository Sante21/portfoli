"use strict";
// #region EX1
let str = 'Sante';
let num = 21;
document.write('Exercici 1: ' + str + num + '<br>');
// #endregion
// #region EX2
const trill = 1000000000000n;
/* let result = trill + num; */
document.write('Exercici 2: Operator "+" cannot be applied to types "bigint" and "number" <br>');
// #endregion
// #region EX3
let numbers = [-2, 14, -52, 1, 21, -62, -1, 0, 12];
document.write('Exercici 3:');
for (const number of numbers) {
    let isGreatter = number > 0;
    if (isGreatter) {
        document.write(' ' + number);
    }
}
// #endregion
// #region EX4
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wednesday"] = 2] = "Wednesday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
    Week[Week["Sunday"] = 6] = "Sunday";
})(Week || (Week = {}));
;
printWeekNomberDay(Week.Thursday);
function printWeekNomberDay(day) {
    document.write('<br>El ' + Week[day] + ' es dia ' + day);
}
// #endregion
// #region EX5
var Size;
(function (Size) {
    Size[Size["XS"] = 0] = "XS";
    Size[Size["S"] = 1] = "S";
    Size[Size["M"] = 2] = "M";
    Size[Size["L"] = 3] = "L";
    Size[Size["XL"] = 4] = "XL";
})(Size || (Size = {}));
;
let finalPrice = getPriceFromSize(Size.M, 10);
document.write('<br> El precio final es de ' + finalPrice + '€');
function getPriceFromSize(size, price) {
    return price * (1 + (size * 0.05));
}
// #endregion
// #region EX6
var Color;
(function (Color) {
    Color["Red"] = "#fb0505";
    Color["Orange"] = "#fb7607";
    Color["Yellow"] = "#f4ea07";
    Color["Green"] = "#61f205";
    Color["Cyan"] = "#00ffff";
    Color["Blue"] = "#0000ff";
    Color["Purple"] = "#8000ff";
})(Color || (Color = {}));
;
// printColors([Color.Red, Color.Green, Color.Blue]);
printColors(Color.Green, Color.Red, Color.Yellow, Color.Red, Color.Cyan);
function printColors(...colors) {
    for (let color of colors) {
        document.body.innerHTML +=
            '<div style="height: 20mm; background-color:' + color + '"></div';
    }
}
// #endregion
// #region Funcion Generica EX1
function typeOf(param) {
    return typeof param;
}
document.write(typeOf('Hola') + '<br>');
document.write(typeOf(21) + '<br>');
document.write(typeOf(false) + '<br>');
// #endregion
// #region Funcion Generica EX2
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([14, 51, 20, 58, 98, 7, 29]));
console.log(bubbleSort(['z', 'a', 'i', 'g', 'v', 'd']));
let alumne = 'Iker';
document.write('<br>' + alumne + '<br>');
let users = [
    { id: 1, nom: 'Iker', email: 'ikersan21@gmail.com' },
    { id: 2, nom: 'Naroa', email: 'naroa29@gmail.com' },
    { id: 3, nom: 'Angel', email: 'ancarfer@gmail.com' },
    { id: 4, nom: 'Guillem', email: 'guilemthegolem@gmail.com' }
];
function infoUsers(user) {
    return '<strong>Nom:</strong> ' + user.nom + '<br><strong>Mail:</strong> ' + user.email;
}
document.write(infoUsers(users[1]));
function getArea(figura) {
    if ('base' in figura && 'altura' in figura) {
        return "<br><strong>L'area del triangle es: </strong>" + figura.base * figura.altura;
    }
    else if ('radi' in figura) {
        return "<br><strong>L'area del cercle es: </strong>" + Math.PI * Math.pow(figura.radi, 2);
    }
    else {
        throw new Error("Forma desconeguda");
    }
}
let triangle = [
    { base: 4, altura: 6 }
];
let cercle = [
    { radi: 5 }
];
document.write(getArea(triangle[0]));
document.write(getArea(cercle[0]));
// #endregion
//# sourceMappingURL=app.js.map