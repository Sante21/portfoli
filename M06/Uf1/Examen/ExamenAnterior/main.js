//exercici1
function cercaHoritzontal(arrayTauler, paraulas){
    let paraulesTrobades = []
    let h = 0
    for(k = 0 ; k < paraulas.length ; k++){
        for(i = 0 ; i < arrayTauler.length ; i++){
            for(j = 0 ; j < arrayTauler[i].length ; j++){
                if(paraulas[k][0] == arrayTauler[i][j] ){
                    let trabat = true
                    for (let m = 1; m < paraulas[k].length; m++) {
                        if(j+m < arrayTauler.length){
                            if(arrayTauler[i][j+m] != paraulas[k][m]){
                                trabat = false
                            }
                        }
                    }
                    if(trabat){
                        paraulesTrobades[h] = diccionari[k]
                        h++
                    }
                }
            }
        }
    }
    return paraulesTrobades
}
function cercaVertical(arrayTauler, diccionari){
    let paraulesTrobades = []
    let h = 0
    for(k = 0 ; k < paraulas.length ; k++){
        let trabat = true
        for (let m = 0; m < paraulas[k].length; m++) {
            if(arrayTauler[i][j] != paraulas[k][m]){
                trabat = false
            }
}
    return paraulesTrobades
}
}
function monstrararray(miArray){
    let miArrayMonstrada = '<span> ['
    for(i = 0 ; i < miArray.length ; i++){
        miArrayMonstrada += '"' + miArray[i]+'"'
        if(i < miArray.length - 1){
            miArrayMonstrada += ','
        }
    }
    miArrayMonstrada += ']</span>'
    return miArrayMonstrada
}
function cercarEx1(){
    let  sopa = [
        ['S','N','E','U','A','N','P','U','A'],
        ['U','S','B','A','E','I','P','L','B'],
        ['N','G','U','A','N','T','S','B','O'],
        ['B','O','F','J','E','R','S','E','I'],
        ['L','R','A','R','R','D','B','N','E'],
        ['O','R','N','S','O','P','A','D','S'],
        ['C','O','D','B','E','A','I','H','U'],
        ['K','U','A','A','V','E','C','C','N'],
        ['P','I','M','I','T','J','O','N','S']
        ]
    let diccionari = ['NEU','GORRO','NIT','SOPA','GUANTS','MITJONS',
    'BOTES','BUFANDA','ABRIC','JERSEI']
    let resultado = document.querySelector('.exemple')
    resultado.innerHTML = 'Horitzontal : ' +  monstrararray(cercaHoritzontal(sopa,diccionari)) + '<br>Vertical:' + 'hola'

}

//Exercici2
function jugarEx2(){
    let taula = ['&#9994;','&#9995;','&#9996;']
    let pedra =  document.querySelector('#pedra')
    let paper = document.querySelector('#paper')
    let tisores = document.querySelector('#tisores')
    let resultatPc = document.querySelector('#resultatPc')
    let resultatUsuari = document.querySelector('#resultatUsuari')
    let rand = Math.floor(Math.random()*3)
    resultatPc.innerHTML = taula[rand]
    if(pedra.checked){
        resultatUsuari.innerHTML = taula[0]
        if(taula[rand] == taula[0]){
            alert('empat')
        }else if(taula[rand] == '&#9995;'){
            alert('el ganador es pc')
        }else{
            alert('el ganador es usuario')
        }
    }
    if(paper.checked){
        resultatUsuari.innerHTML = taula[1]
        if(taula[rand] == taula[1]){
            alert('empat')
        }else if(taula[rand] == '&#9996;'){
            alert('el ganador es pc')
        }else{
            alert('el ganador es usuario')
        }
    }
    if(tisores.checked){
        resultatUsuari.innerHTML = taula[2]
        if(taula[rand] == taula[2]){
            alert('empat')
        }else if(taula[rand] == '&#9994;'){
            alert('el ganador es pc')
        }else{
            alert('el ganador es usuario')
        }
    }

}

//Exercici3

function validarEx4(){
    let var3 = false
    let var1 = false
    let resultado = document.querySelector('#resultatEx3')
    let email = document.querySelector('#mailEx3')
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','_','-','.']

    if(email.value[0] == '_' || email.value[0] == '-'  || email.value[0] == '.' ){
        var3 = true
    }
    let contararoba = 0
    let indesDeAroba 
    for (let i = 0; i < email.value.length; i++) {
        for(j = 0 ; j < alphabets.length ; j++){
            if(email.value[i] == '@'){
                contararoba++
                indesDeAroba = i
            }
            
                if(alphabets[i] != email.value[i]){
                    var1 = true
                }else{
                    var1 = false
                }
            }
    }
    if(contararoba == 0 || contararoba > 1){
        resultado.innerHTML = 'Ha de tenir només una "@".'
    }else{
        resultado.innerHTML = ''
        for (let j = indesDeAroba; j < email.value.length; j++) {
                     
        }
    }
    if(var3){
        resultado.innerHTML = 'Els caràcters "-"  "_" "." han d anar seguits per una lletra.'
    }else{
        resultado.innerHTML = ''

    }
    if(var1){
        resultado.innerHTML = 'Caràcters valids [a-z], [0-9], "-", "_" i ".".'
    }else{
        resultado.innerHTML = ''

    }
}

//Exercici4

function iniciarJuego(){
    let rand = 1
    let elemnto = document.querySelector('#forat-'+ rand)
    let pasaTiempo = false
    for(i = 1 ; i < 31 ; i++){
        setTimeout(() => {
        elemnto.classList.remove('talp')
        rand =  Math.floor(Math.random()*6) + 1
        elemnto = document.querySelector('#forat-'+ rand)
        elemnto.classList.add('talp')
        }, i*1000);
    }
    setTimeout(() => {
        elemnto.classList.remove('talp')
        rand =  Math.floor(Math.random()*6) + 1
        elemnto = document.querySelector('#forat-'+ rand)
        elemnto.classList.add('talp')
        alert('pasa tiempo')
        document.querySelector('#puntuacio').innerHTML = 0
        }, 30000);
  

}
function golpearMole(elem){
    let puntuacio = document.querySelector('#puntuacio')
    if(elem.classList.length == 2 ){
        if(elem.classList[1] == 'talp'){
            puntuacio.textContent++
        }
    }
}

//Exercici5
let posision = 1
function afegirColor(color){
    if(posision < 7){
        let elemnto = document.querySelector('#llista-'+posision)
        elemnto.classList.add(color)
        posision++
    }

    
}
function treuColor(){
    for (let i = 1; i < 6 ; i++) {
        let elemnto1 = document.getElementById('llista-'+i)
        let elemnto2 = document.getElementById('llista-'+(i+1))
        let color = elemnto2.style.backgroundColor
        elemnto1.style.backgroundColor = color
    }
}