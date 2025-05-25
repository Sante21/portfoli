
// let contrasenya = document.getElementById("pwd");

// let p8char = document.getElementById("p8c");
// let p1num = document.getElementById("p1n");
// let p1specialChar = document.getElementById("p1sc");
// let p1Up1Low = document.getElementById("p1u1l");

// contrasenya.addEventListener("keyup", checkPassword);

document.getElementById('txt-pass').addEventListener('keyup', pressKey);

function pressKey(e) {
    let txt = document.getElementById('pwd').value;
    
    document.getElementById("p8c").className = moreThan8(txt) ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark';
    document.getElementById("p1n").className = haveANumber(txt) ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark';
    document.getElementById('p1sc').className = isSpecial(txt) ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark';
    document.getElementById('p1u1l').className = haveUpper(txt) ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark';
}

// function checkPassword(e) {
//     let char = e.key;
//     let password = contrasenya.value;

//     if (password.length >= 8) {
//         p8char.className = "fa-solid fa-circle-check";
//     } else {
//         p8char.className = "fa-solid fa-circle-xmark";
//     }

//     if (password.value) {

//     }

//     console.log(e);
//     console.log(contrasenya.value);
// }

function moreThan8(txt) {
    if (count(txt) > 8) {
        return true
    }
    return false
}

function haveANumber(txt) {
    for (let i = 0; i < count(txt); i++) {
        if (!isNaN(parseInt(txt.charAt(i)))) {
            return true
        }
    }
    return false;
}

function isSpecial(txt) {
    let caracter_especial = ['!', '"', "·", "@", "#", '%', '&'];
    for (let i = 0; i < count(txt); i++) {
        for (let j = 0; j < (caracter_especial.length); j++) {
            if (caracter_especial[j] === txt.charAt(i)) {
                return true;
            }
        }
    }
    return false;
}

function haveUpper(txt) {
    for (let i = 0; i < count(txt); i++) {
        if (txt.toUpperCase() === txt.charAt(i)) {
            return true;
        }
    }
    return false;
}

function haveLower(txt) {
    for (let i = 0; i < count(txt); i++) {
        if (txt[i].toUpperCase() !== txt[i]) {
            return true;
        }
    }
    return false;
}