
// #region EX1
let str: string = 'Sante';
let num: number = 21;

document.write('Exercici 1: ' + str + num + '<br>');

// #endregion

// #region EX2
const trill: bigint = 1000000000000n;

/* let result = trill + num; */
document.write('Exercici 2: Operator "+" cannot be applied to types "bigint" and "number" <br>');

// #endregion

// #region EX3
let numbers: number[] = [-2, 14, -52, 1, 21, -62, -1, 0, 12];

document.write('Exercici 3:');
for (const number of numbers) {
    let isGreatter: boolean = number > 0
    if (isGreatter) {
        document.write(' ' + number);
    }
}

// #endregion

// #region EX4
enum Week { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };

printWeekNomberDay(Week.Thursday)

function printWeekNomberDay(day: number): void {
    document.write('<br>El ' + Week[day] + ' es dia ' + day)
}

// #endregion

// #region EX5
enum Size { XS, S, M, L, XL };

let finalPrice: number = getPriceFromSize(Size.M, 10);
document.write('<br> El precio final es de ' + finalPrice + '€');

function getPriceFromSize(size: Size, price: number): number {
    return price * (1 + (size * 0.05));
}

// #endregion

// #region EX6
enum Color {
    Red = '#fb0505', Orange = '#fb7607', Yellow = '#f4ea07',
    Green = '#61f205', Cyan = '#00ffff', Blue = '#0000ff', Purple = '#8000ff',
};

// printColors([Color.Red, Color.Green, Color.Blue]);
printColors(Color.Green, Color.Red, Color.Yellow, Color.Red, Color.Cyan);

function printColors(...colors: Color[]): void {
    for (let color of colors) {
        document.body.innerHTML +=
            '<div style="height: 20mm; background-color:' + color + '"></div';
    }
}

// #endregion

// #region Funcion Generica EX1
function typeOf<T>(param: T): string {
    return typeof param;
}

document.write(typeOf('Hola') + '<br>');
document.write(typeOf(21) + '<br>');
document.write(typeOf(false) + '<br>');

// #endregion

// #region Funcion Generica EX2

function bubbleSort<T>(arr: T[]): T[] {
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

console.log(bubbleSort([14, 51, 20, 58, 98, 7, 29]))
console.log(bubbleSort(['z', 'a', 'i', 'g', 'v', 'd']))

// #endregion

// #region Alias EX1
type Username = string;

let alumne: Username = 'Iker';
document.write('<br>' + alumne + '<br>');

// #endregion

// #region Alias EX2
type User = {
    id: number,
    nom: string,
    email: string
};

let users: User[] = [
    { id: 1, nom: 'Iker', email: 'ikersan21@gmail.com' },
    { id: 2, nom: 'Naroa', email: 'naroa29@gmail.com' },
    { id: 3, nom: 'Angel', email: 'ancarfer@gmail.com' },
    { id: 4, nom: 'Guillem', email: 'guilemthegolem@gmail.com' }
];

function infoUsers(user: User): string {
    return '<strong>Nom:</strong> ' + user.nom + '<br><strong>Mail:</strong> ' + user.email;
}

document.write(infoUsers(users[1]))

// #endregion

// #region Alias EX3
type Triangle = {
    base: number,
    altura: number
};

type Cercle = {
    radi: number
};

function getArea(figura: Triangle | Cercle): string {
    if ('base' in figura && 'altura' in figura) {
        return "<br><strong>L'area del triangle es: </strong>" + figura.base * figura.altura;
    } else if ('radi' in figura) {
        return "<br><strong>L'area del cercle es: </strong>" + Math.PI * Math.pow(figura.radi, 2);
    } else {
        throw new Error("Forma desconeguda");
    }
}

let triangle: Triangle[] = [
    { base: 4, altura: 6 }
];

let cercle: Cercle[] = [
    { radi: 5 }
];

document.write(getArea(triangle[0]));
document.write(getArea(cercle[0]));

// #endregion